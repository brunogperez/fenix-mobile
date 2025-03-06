import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../components/InputForm'
import ButtonCustom from '../components/ButtonCustom'
import FormCustom from '../components/FormCustom'

const SignUpScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
      <FormCustom >
        <Text style={styles.textTitle}>Create Account</Text>
        <InputForm
          label={'First Name'}
          placeholder={'John'}
          keyboardType={'default'}
        />
        <InputForm
          label={'Last Name'}
          placeholder={'Doe'}
          keyboardType={'default'}
        />
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
        <InputForm
          label={'Confirm Password'}
          placeholder={'MyPassword123'}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <ButtonCustom onPress={() => console.log('Pressed')} text={'Sign In'} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
          <Text style={styles.textSubtitle}>No tienes una cuenta?</Text>
          <Pressable onPress={() => console.log('Pressed')}>
            <Text style={{ ...styles.redirectButton }} onPress={() => navigation.navigate('LoginScreen')}>Inicia sesión</Text>
          </Pressable>
        </View>
      </FormCustom>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF5E1',
  },
  formContainer: {
    backgroundColor: '#141311',
    padding: 20,
    borderRadius: 24,
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