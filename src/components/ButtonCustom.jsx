import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonCustom = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F87E2B',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
})