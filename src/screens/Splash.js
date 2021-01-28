import React, { useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      validateToken();
    }, 1500);
  }, []);

  const validateToken = async () => {
    const token = await AsyncStorage.getItem('@token');

    if (!token) {
      navigation.navigate('Login');
      return;
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator
        color='black'
        size='large'
      />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    fontSize: 28,
    color: 'black',
    marginTop: 10
  }
});
