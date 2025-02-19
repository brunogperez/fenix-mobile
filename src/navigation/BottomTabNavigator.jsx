import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStackNavigator from './ProfileStackNavigator';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        lazy: false,
      }}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="person"
                size={focused ? 30 : 24}
                color={focused ? 'white' : 'black'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DashboardScreen"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="home"
                size={focused ? 30 : 24}
                color={focused ? 'white' : 'black'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    elevation: 0,
    borderTopWidth: 0,
    marginHorizontal: '25%',
    height: 40,
    bottom: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});