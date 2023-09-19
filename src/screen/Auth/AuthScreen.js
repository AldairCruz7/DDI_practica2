import React from 'react'
import  { View, Text, StyleSheet } from 'react-native'
import Fonts from '../../constants/Fonts'


const AuthScreen = () => {
  return (
    <View style = { styles.container}>
      
        <Text style={styles.title}>AuthScreen</Text>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.large
  }
});