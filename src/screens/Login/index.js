import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** components */
import Input from '../../components/Input';

/** api calls */
import { loginUser } from '../../config/Api';

export default function({ navigation }) {
  const inputUser = createRef();
  const inputPassword = createRef();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChangeText = ({ index, value }) => setUser({
    ...user,
    [index]: value
  });

  const handleFocusPasswordInput = () => inputPassword.current?.focus();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const { username, password } = user;

      if (username === '' || password === '') {
        Alert.alert('Please enter a username or password');
        setLoading(false);
        return;
      }

      const { token } = await loginUser({ username, password });
      
      if (!token) {
        Alert.alert('Username or password incorrect.')
        setLoading(false);
        return;
      }

      await AsyncStorage.setItem('@token', token);

      setLoading(false);

      navigation.navigate('Home');
    } catch (err) {
      console.log(err)
      Alert.alert('Something goes wrong!')
      setLoading(false);
    }
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView style={styles.safeArea} enabled>
          <View style={styles.container}>
            <Text style={styles.singIn}>Let's sing you in.</Text>
            <Text style={styles.wellcome}>Wellcome back.</Text>
            <View style={styles.inputContainer}>
              <Input
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={value => handleChangeText({ index: 'username', value })}
                value={user.username}
                autoCapitalize='none'
              />
              <Input
                placeholder='Password'
                secureTextEntry
                onChangeText={value => handleChangeText({ index: 'password', value })}
                value={user.password}
                returnKeyType='done'
                onSubmitEditing={handleLogin}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}>
            {
              loading
              ? <ActivityIndicator
                color='white'
                size='large'
              />
              : <Text style={styles.buttonText}>Sing in</Text>
            }
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  scroll: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    padding: 20
  },
  singIn: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20
  },
  wellcome: {
    fontSize: 28,
    color: 'black',
    marginTop: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginButton: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});
