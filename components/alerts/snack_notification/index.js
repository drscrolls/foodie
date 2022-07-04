import React from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';
import { Avatar, BottomSheet, Card, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SnackNotification = () => {
    const bgColor = "#ebf8e6";
    return (
        <Pressable style={styles.container}>
            <View style={[styles.alertCardContainer, {backgroundColor: bgColor}]}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity style={styles.alertTextContainer}>
                        <Text style={styles.alertTitle}>Invite friends and pay less</Text>
                        <Text style={styles.alertDescription}>Invite friends and earn free credits with their first order</Text>
                    </TouchableOpacity>

                    <View style={styles.chevronContainer}>
                        <Feather name="chevron-right" size={20} color="black" />
                    </View>
                </View>
                
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    innerContainer: {
        flexDirection: "row",
        flex: 1
    },
    iconBg: {
        backgroundColor: '#eceff6',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    icon: {
        // height: 40,
        // width: 40,
        borderRadius: 50,
    },
    alertTitle: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        marginBottom: 5
    },
    alertDescription: {
        color: "#666",
        textAlign: "center",
        fontSize: 11,
    },
    alertTextContainer: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 1,
        textAlign: "center"
    },
    alertCardContainer: {
        borderColor: "white",
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
    },
    chevronContainer: {
        justifyContent: "center",
        
    }
})

export default SnackNotification;
