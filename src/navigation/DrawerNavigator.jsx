import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ProfileStackNavigator from './ProfileStackNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProfileStack" component={ProfileStackNavigator} options={{ title: 'Profile' }} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})