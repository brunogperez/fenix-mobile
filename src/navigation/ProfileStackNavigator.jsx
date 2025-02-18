import { StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const ProfileStack = createStackNavigator()

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="LoginScreen" component={LoginScreen} />
      <ProfileStack.Screen name="SignUpScreen" component={SignUpScreen} />
    </ProfileStack.Navigator>)
}

export default ProfileStackNavigator

const styles = StyleSheet.create({})