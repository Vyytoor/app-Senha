import React, { useCallback, useState } from 'react';
import { FlatList, Text, View, Button, TouchableOpacity } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Card, CardProps } from '../../components/Card';
import { HeaderHome } from '../../components/HeaderHome';
import { styles } from './styles';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Form: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export function Home({ navigation }: HomeProps) {
  const [data, setData] = useState<CardProps[]>([]);
  const { getItem, setItem } = useAsyncStorage("@savepass:passwords");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
    console.log(data);
  }

  async function handleRemove(id: String) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];
    const data = previousData.filter((item: CardProps) => item.id !== id);
    setItem(JSON.stringify(data));
    setData(data);
  }

  useFocusEffect(
    useCallback(() => {
      handleFetchData();
    }, [])
  );

  const handleLogout = async () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.listHeader}>
        <Text style={styles.title}>Suas senhas</Text>
        <Text style={styles.listCount}>{`${data.length} ao total`}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) =>
          <Card data={item} onPress={() => handleRemove(item.id)} />
        }
      />
      <View style={styles.footer}>
        {/* <Button title="Bloquear" onPress={handleLogout} /> */}

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Bloquear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
