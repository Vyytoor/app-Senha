import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    navigation: any;
};

export function Login({ navigation }: Props) {
    useEffect(() => {
        checkBiometricSupport();
    }, []);

    const checkBiometricSupport = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        if (!compatible) {
            Alert.alert('Biometria não suportada', 'Seu dispositivo não suporta autenticação biométrica.');
            return;
        }

        const biometryType = await LocalAuthentication.supportedAuthenticationTypesAsync();
        if (biometryType.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) {
            authenticateWithBiometrics();
        } else {
            Alert.alert('Biometria não configurada', 'Configure sua biometria nas configurações do dispositivo.');
        }
    };

    const authenticateWithBiometrics = async () => {
        try {
            const result = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Autenticar usando a biometria',
            });
            if (result.success) {
                console.log('Autenticação biométrica bem-sucedida');
                navigation.replace('Home');
            } else {
                console.log('Autenticação biométrica falhou ou foi cancelada pelo usuário');
            }
        } catch (error) {
            console.error('Erro durante a autenticação biométrica', error);
            Alert.alert('Erro', 'Erro durante a autenticação biométrica');
        }
    };

    return (
        <View style={styles.container}>
            <Icon name="lock" size={80} color="#007BFF" style={styles.icon} />
            <Text style={styles.title}>Gerenciador de Senha</Text>

            <TouchableOpacity style={styles.button} onPress={authenticateWithBiometrics}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.paragrafo}>Sinta-se Seguro(a) Aqui!</Text>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    icon: {
        marginBottom: 20,
    },
    paragrafo: {
        marginTop: 20,
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    },
});