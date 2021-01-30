import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

const Input = ({
  ...props
}) => (
  <View style={styles.container}>
    <TextInput
      { ...props }
      style={styles.input}
      placeholderTextColor='grey'
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    padding: Platform.OS === 'ios' ? 20 : 5,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: Platform.OS === 'android' ? 15 : 0
  },
  input: {
    color: 'black'
  }
});

export default Input;
