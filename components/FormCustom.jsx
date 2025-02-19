import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const FormCustom = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default FormCustom

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141311',
        padding: 20,
        borderRadius: 20,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})