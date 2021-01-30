import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

/** components */
import ImageList from './components/ImageList';

/** api calls */
import { getImages } from '../../config/Api';

export default function({ navigation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const data = await getImages();
    console.log(data)
    setImages(data);
  };

  const handleAskLogout = () => {
    Alert.alert(
      'Log out',
      'Are you sure you want to log out?',
      [
        {
          text: 'No',
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: 'Yes', onPress: handleLogout }
      ],
      { cancelable: false }
    )
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@token');
    navigation.navigate('Logout');
  };

  if (images.length === 0) {
    return (
      <ActivityIndicator
        color='black'
        style={styles.loading}
      />
    )
  };

  return (
    <>
      <StatusBar hidden/>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleAskLogout}
          style={styles.exit}>
          <Icon
            name='exit-to-app'
            color='black'
            size={40}
          />
        </TouchableOpacity>
        <ImageList
          data={images}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loading: {
    marginTop: 70
  },
  exit: {
    position: 'absolute',
    right: 10,
    top: Platform.OS === 'ios' ? 60 : 20,
    zIndex: 10000
  }
});
