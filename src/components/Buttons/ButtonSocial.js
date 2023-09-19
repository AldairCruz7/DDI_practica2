import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../navigation/TabNavigation/TabNavigation.styles';

export default function ButtonSocial(props) {
    const {title, imageType, color} = props;
    let imageSource;

    if(imageType === 'facebook'){
        imageSource = require('../../assets/images/facebook.png');
    }else if(imageType === 'google'){
        imageSource = require('../../assets/images/google.png');
    }else{
        imageSource = require('../../assets/images/twitter.png');
    }


    const buttonStyle = {
        backgroundColor : color,
    }
  return (
        <TouchableOpacity style={[styles.contentButton, buttonStyle]}>
            <View>
                <Image source={imageSource} style={styles.image}></Image>
            </View>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
    