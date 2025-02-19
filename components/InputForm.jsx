import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputForm = ({
  label,
  placeholder,
  keyboardType,
  secureTextEntry = false
}) => {


  return (
    <View>
      <Text style={styles.textInput}>{label}</Text>
      <TextInput
        label={label}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    fontSize: 12,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    width: 300,
    height: 56,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
})