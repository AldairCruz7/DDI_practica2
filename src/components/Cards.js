import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';


export default function Cards(props) {
    const {characters } = props;

    const goToPersonaje = () =>{
      props.navigation.navigate('InfoRM', { characters })
    }
  return (
    <TouchableOpacity onPress={goToPersonaje} style={{alignItems:'center', alignContent:'space-between', padding:15, marginBottom: 30}}>
        

      <Card.Title
          title={characters.name}
          subtitle="Card Subtitle"
          left={(props) =><Avatar.Image  source={{ uri: characters.image }}/>}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />

    </TouchableOpacity>
  )
}