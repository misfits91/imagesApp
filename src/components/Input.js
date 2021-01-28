import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = ({
  ...props
}) => (
  <View style={styles.container}>
    <TextInput
      { ...props }
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20
  },
  input: {
    color: 'black'
  }
});

export default Input;
