import React from 'react'
import  { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar,Button } from 'react-native-paper';
import { useAuth } from '../Hooks/UseAuth';
import { globalStyles } from '../../styles';
const AccountScreen = () => {
  const {logout, user} = useAuth();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        {/* <Avatar.Icon size={24} icon="folder" /> */}
        
        
        <Avatar.Image size={80} source={require('../assets/Aldair.jpeg')} />
        </View>
        <ScrollView>
            <View  style={styles.MainContainer}>
                <Text>{user.firstname} {user.lastname}</Text>
                <Text>Correo: {user.email}</Text>
                
        <Button mode="contained" style={globalStyles.form.buttonSubmit} onPress={logout}> Salir </Button>
            </View>
        </ScrollView>
        <View style={styles.footer}>

        </View>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 10,
   
  },
  MainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-between', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 10,
  
  }
})