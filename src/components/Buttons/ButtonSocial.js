import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function ButtonSocial(props) {
    const {title, imageType, color} = props;
    let imageSource;

    if(imageType === 'facebook'){
        imageSource = require('../../assets/facebook.png');
    }else if(imageType === 'google'){
        imageSource = require('../../assets/google.png');
    }else{
        imageSource = require('../../assets/twitter.png');
    }


    const buttonStyle = {
        backgroundColor : color,
    }
  return (
        <TouchableOpacity style={[Styles.contentButton, buttonStyle]}>
            <View>
                <Image source={imageSource} style={Styles.image}></Image>
            </View>
            <Text style={Styles.text}>{title}</Text>
        </TouchableOpacity>
  )
}

const Styles =StyleSheet.create({
    contentButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
        height: 50,
        padding: 15,
        marginVertical: 10,
}})
    