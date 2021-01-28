import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Login');
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.thanks}>Thanks for using this app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  thanks: {
    fontSize: 34,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 100
  }
});
