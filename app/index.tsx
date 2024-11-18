import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
import logoImg from '../assets/images/logofakestore.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { loginSuccess } from './reducers/authSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './types';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.status === 401) {
        Alert.alert('Login Failed', 'Incorrect credentials. Please try again.');
        return;
      }
      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }
      const data = await response.json();
      dispatch(loginSuccess(data.token));
      navigation.navigate('ProductList'); // Ensure this matches the screen name in _layout.tsx
      Alert.alert('Login Successful', `Token: ${data.token}`);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Login Failed', error.message);
      } else {
        Alert.alert('Login Failed', 'An unknown error occurred.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginForm;