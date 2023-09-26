import React, { useEffect, useState} from 'react'
import  { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image} from 'react-native'

import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import Hunter from '../../assets/Hunter.png';




const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Hunter} />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        {isLogin ? <Login cambioAuth={cambioAuth} /> : <Register cambioAuth={cambioAuth} />}
      </KeyboardAvoidingView>
    </View>
  );
}

export default AuthScreen
