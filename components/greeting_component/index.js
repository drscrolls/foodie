import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
  
const GreetingComponent = ({navigation, name}) => {

    const username = name ? name : "User";
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")} style={styles.container}>
            <Text style={styles.greetingTitle}>Hello {username} 👋 </Text>
            <Text style={styles.greetingSubtitle}>We are delivering happiness</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    greetingTitle: {
        // fontFamily: "Arial",
        fontWeight: "600",
        fontSize: 18
    },
    greetingSubtitle: {
        // fontFamily: "Arial",
        fontSize: 14
    }  

})

export default GreetingComponent;
