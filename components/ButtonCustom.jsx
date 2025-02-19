import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonCustom = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default ButtonCustom

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F87E2B',
    padding: 10,
    borderRadius: 24,
    marginTop: 10,
    width: 150,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
  },
})