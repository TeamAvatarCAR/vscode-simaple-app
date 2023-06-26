import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import styles from './AppStyles';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
        <Image source={require('./photos/explode.png')} resizeMode="center" style={styles.logoImg}></Image>
        <Text style={styles.textBold}>Welcome To</Text>
        <Image source={require('./photos/logotxt.png')} resizeMode="center" style={styles.logoTxtImg}></Image>
        <Text style={styles.text}>Get In To Get Out</Text>
        <View style={styles.containerEnd}>
            <Button style={styles.btn} title="Create Taturu Account" color={'#ffa500'}/>  
        </View>
        {/* <Button style={styles.btn} title="Create Taturu Account" color={'#ffa500'}/> */}
      </ImageBackground>
    </View>
  );
}

