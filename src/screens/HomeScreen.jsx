import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ButtonCustom from '../components/ButtonCustom';
import * as Progress from 'react-native-progress';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.background} colors={['#242529', '#F87E2B']} />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Home</Text>
        <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20, paddingInlineEnd: 20 }} >
          <MaterialIcons name="search" size={24} color="#8A8587" />
          <MaterialIcons name="notifications" size={24} color="#8A8587" />
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20 }} >
        <View style={{ ...styles.componentContainer, width: 170, height: 170 }} >
          <Text style={{ ...styles.textHeader, color: "#F87E2B", fontSize:48 }}>115</Text>
          <Text style={{ ...styles.textHeader, color: "#8A8587", fontSize:24 }}>Clients</Text>
        </View>
        <View style={{ ...styles.componentContainer, width: 170, height: 170 }}>
          <Text style={{ ...styles.textHeader, color: "#F87E2B", fontSize: 48 }}>250</Text>
          <Text style={{ ...styles.textHeader, color: "#8A8587", fontSize: 24 }}>Credits</Text>
        </View>
      </View>

      <View>
        <View style={{ ...styles.contentContainer, width: 360, height: 250 }}>
          <Text style={styles.textTitle}>Last Renovations</Text>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.textContentRenovation}>Bathroom</Text>
              <Text style={styles.priceContentRenovation}>$ 2000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.textContentRenovation}>Bathroom</Text>
              <Text style={styles.priceContentRenovation}>$ 2000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.textContentRenovation}>Bathroom</Text>
              <Text style={styles.priceContentRenovation}>$ 2000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={styles.textContentRenovation}>Bathroom</Text>
              <Text style={styles.priceContentRenovation}>$ 2000</Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 10, }}>
              <ButtonCustom text='Go to Renovations' onPress={() => console.log('pressed')} />
            </View>
          </View>
        </View>

        <View style={{ ...styles.contentContainer, width: 360, height: 200 }}>
          <Text style={styles.textTitle}>Profit</Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Progress.Circle
              progress={0.8}
              size={70}
              color="#F87E2B"
              style={{ alignItems: 'center', justifyContent: 'center' }}
            />
          </View>
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
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  componentContainer: {
    backgroundColor: '#303134',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#303134',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'semibold',
    textAlign: 'flex-start',
    marginTop: 5
  },
  textContentRenovation: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100'
  },
  priceContentRenovation: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})