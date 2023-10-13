import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';


export default function Cards(props) {
    const {characters } = props;

    const goToPersonaje = () =>{
      props.navigation.navigate('InfoRM', { characters })
    }
  return (
    <TouchableOpacity onPress={goToPersonaje} >
        

      <Card.Title
          
          titleStyle={{color: 'white', paddingLeft:20}}
          title={characters.name}
          left={(props) =><Avatar.Image  source={{ uri: characters.image }}/>}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />

    </TouchableOpacity>
  )
}