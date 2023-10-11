import { View, Text, Image } from 'react-native'
import React from 'react'

export default function InfoRM(props) {
    const {characters} = props.route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
            source={{ uri: characters.image }}
            style={{ width: 200, height: 200, borderRadius: 160 }}
        />
        <Text>Nombre: {characters.name}</Text>
        <Text>Estatus: {characters.status}</Text>
        <Text>Especie: {characters.species}</Text>
    </View>

  )
}