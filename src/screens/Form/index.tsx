import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Form: undefined;
};

type FormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Form'>;

interface FormProps {
  navigation: FormScreenNavigationProp;
}

export function Form({ navigation }: FormProps) {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { setItem, getItem } = useAsyncStorage("@savepass:passwords");

  async function handleNew() {
    try {
      const id = uuid.v4();

      const newData = {
        id,
        name,
        user,
        password
      };

      const response = await getItem();
      const previewData = response ? JSON.parse(response) : [];

      const data = [...previewData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Cadastrado Com Sucesso!",
      });

      // Navegar para a tela de Home após o cadastro
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
        <ScrollView>
          <HeaderForm />

          <View style={styles.form}>
            <Input
              label="Nome do serviço"
              onChangeText={setName}
            />
            <Input
              label="E-mail ou usuário"
              autoCapitalize="none"
              onChangeText={setUser}
            />
            <Input
              label="Senha"
              secureTextEntry
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleNew}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
