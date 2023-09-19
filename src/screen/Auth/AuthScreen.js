import React from 'react'
import  { View, Text, StyleSheet } from 'react-native'
import Fonts from '../../constants/Fonts'
import Colors from '../../constants/Colors'
import ButtonSocial from '../../components/Buttons/ButtonSocial'



const AuthScreen = () => {
  return (
    <View style = { styles.container}>
      
        <Text style={styles.title}>AuthScreen</Text>
        <View style={styles.buttonContainer}>
          <ButtonSocial title="Iniciar sesión con Facebook" imageType="facebook" color={Colors.faceBookColor}/>
          <ButtonSocial title="Iniciar sesión con Google" imageType="google"  color={Colors.googleColor} />
        </View>

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