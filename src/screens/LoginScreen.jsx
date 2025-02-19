import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import InputForm from '../../components/InputForm'
import ButtonCustom from '../../components/ButtonCustom'

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textTitle}>Welcome back!</Text>
        <Text style={styles.textSubtitle}>Enter your credentials to access your account</Text>
        <InputForm
          label={'Email'}
          placeholder={'email@example.com'}
          keyboardType={'email'}
        />
        <InputForm
          label={'Password'}
          placeholder={'MyPassword123'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <ButtonCustom onPress={() => console.log('Pressed')} text={'Login'} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
          <Text style={styles.textSubtitle}>No tienes una cuenta?</Text>
          <Pressable >
            <Text style={{ ...styles.redirectButton }} onPress={() => navigation.navigate('SignUpScreen')}>Registrate</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF5E1',
  },
  formContainer: {
    backgroundColor: '#141311',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },

  redirectButton: {
    color: '#F87E2B',
    fontWeight: 'bold',
    fontSize: 16,
  },
})