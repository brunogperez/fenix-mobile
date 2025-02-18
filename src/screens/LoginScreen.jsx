import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const LoginScreen = ({ navigation }) => {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textSubtitle}>Enter your credentials to access your account</Text>
        <TextInput label="Email" style={styles.textInput} />
        <TextInput label="Password" style={styles.textInput} />
        <Pressable onPress={() => console.log('Pressed')} style={styles.confirmButton}>
          <Text>Sign in</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
          <Text style={styles.textSubtitle}>No tienes una cuenta?</Text>
          <Pressable onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{ ...styles.redirectButton }}>Sign in</Text>
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
    height: 200,
    width: '100%',
    backgroundColor: '#1E272E',
  },
  formContainer: {
    backgroundColor: '#2E3B38',
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  textInput: {
    margin: 10,
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
  confirmButton: {
    backgroundColor: '#00D0D0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
  },
  redirectButton: {
    color: '#00D0D0',
    fontWeight: 'bold',
  },
})