import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './LoginStyle';

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput style={styles.input} secureTextEntry={true} />
            </View>
        </View>
    );
};

export default LoginPage;