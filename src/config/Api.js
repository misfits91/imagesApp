import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMAGES_URL, LOGIN_URL } from './Constans';

export const loginUser = async ({ username, password }) => {
  try {
    const data = {
      username,
      password
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    };
    const request = await fetch(LOGIN_URL, options);
    const result = await request.json();
    return result;
  } catch (err) {
    return false;
  }
};

export const getImages = async () => {
  const token = await AsyncStorage.getItem('@token');
  const options = {
    method: 'GET',
    headers:{
      'Authorization': `Bearer ${token}`
    }
  };
  const request = await fetch(IMAGES_URL, options);
  const data = await request.json();
  return data;
};