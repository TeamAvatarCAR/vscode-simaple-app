import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import styles from './AppStyles';
import MainPage from './AppPages/MainPage/MainPage'
import LoginPage from './AppPages/LogInPage/Login'

const image = {uri: 'https://www.pinterest.de/pin/327707310381126648/?send=true'};

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage/>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
        <Image source={require('./photos/explode.png')} resizeMode="center" style={styles.logoImg}></Image>
        <Text style={styles.textBold}>Welcome To</Text>
        <Image source={require('./photos/logotxt.png')} resizeMode="center" style={styles.logoTxtImg}></Image>
        <Text style={styles.text}>Get In To Get Out</Text>
        <View style={styles.containerEnd}>
            <Button style={styles.btn} title="Create Taturu Account" color={'#ffa500'}/> 
            <View style={styles.containerRow}>
              <View style={styles.buttonContainer}>
                <Text style={styles.textBeforeLink}>Already A Member?</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Text style={styles.textLink}>Log In</Text>
              </View>
            </View> 
        </View>
      </ImageBackground> */}
    </View>
  );
}

