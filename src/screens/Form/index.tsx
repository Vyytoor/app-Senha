import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import uuid from 'react-native-uuid';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import { styles } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { HeaderForm } from '../../components/HeaderForm';

export function Form() {

  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const {setItem, getItem} = useAsyncStorage("@savepass:passwords");

  async function handleNew() {
    try {
      const id = uuid.v4();


      const newData = {
        id,
        name,
        user,
        password
      }

      const response = await getItem();
      const previewData = response ? JSON.parse(response) : [];

      const data = [...previewData, newData];

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Cadastrado Com Secesso!"
      })
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
            <Button
              title="Salvar"
              onPress={handleNew}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView >
  );
}