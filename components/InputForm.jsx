import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const InputForm = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry = false
}) => {


  return (
    <TextInput
      label={label}
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
    width: 300,
    height: 56,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
})