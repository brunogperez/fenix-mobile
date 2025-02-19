import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import React from 'react'

const InputForm = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry
}) => {


  return (
    <TextInput
      label={label}
      Type='outlined'
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  )
}

export default InputForm

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: 'white',
    width: 300,
    height: 56
  },
})