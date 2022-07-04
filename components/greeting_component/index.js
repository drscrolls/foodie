import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
  
const GreetingComponent = ({navigation, name}) => {

    const username = name ? name : "User";
    return (
        <View style={styles.container}>
            <Text style={styles.greetingTitle}>Hello {username} 👋 </Text>
            <Text style={styles.greetingSubtitle}>We are delivering happiness</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    greetingTitle: {
        fontFamily: "Arial",
        fontWeight: "400",
        fontSize: 18
    },
    greetingSubtitle: {
        fontFamily: "Arial",
        fontSize: 14
    }  

})

export default GreetingComponent;
