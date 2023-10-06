import React, { useEffect, useState} from 'react'
import  { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, ImageBackground} from 'react-native'

import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';

import rickymorty from '../../assets/rickymorty.png';

import {styles} from './AuthScreen.styles'


const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/space.jpg')}
        style={styles.imageBackground} // Estilo modificado aquí
      >
        <Image style={styles.image} source={rickymorty} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
          {isLogin ? <Login cambioAuth={cambioAuth} /> : <Register cambioAuth={cambioAuth} />}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default AuthScreen
