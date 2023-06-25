import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import styles from './AppStyles';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>contact Inside</Text>
      </ImageBackground>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center', 
//     width: '100%', 
//     height: '100%',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });
