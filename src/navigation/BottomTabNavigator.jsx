import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNavigator from './ProfileStackNavigator';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        lazy: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="person"
                size={focused ? 32 : 26}
                color={focused ? '#00D0D0' : 'black'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})