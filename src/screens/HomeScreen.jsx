import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background} colors={['#242529', '#F87E2B']} />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Home</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 20, marginVertical: 10 }} >
        <View style={styles.componentContainer} >

        </View>
        <View style={styles.componentContainer}>

        </View>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#242529',
    padding: 30,
    width: '100%',
    zIndex: 2
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  textHeader: {
    marginHorizontal: 10,
    color: 'white',
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
  },
  componentContainer: {
    height: 170,
    width: 170,
    backgroundColor: '#303134',
    borderRadius: 20
  }
})