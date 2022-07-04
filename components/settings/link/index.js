import React from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { BottomSheet, Card, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SettingsItem = ({icon, name}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.iconBg}>
                    <Ionicons name={icon} size={24} color="#5a61cb" />
                </View>

                <View style={styles.locationContainer}>
                    <Text style={styles.settingName}>{name}</Text>
                </View>

                <View style={styles.chevronContainer}>
                    <Feather name="chevron-right" size={20} color="black" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        flexDirection: "row",
        flex: 1
    },
    iconBg: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: '#eceff6',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    settingName: {
        fontSize: 14,
        fontWeight: "500"
    },
    locationTitle: {
        fontSize: 12,
        color: "#999"
    },
    locationContainer: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 1
    },
    container: {
        borderColor: "white",
        marginHorizontal: 15,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f3f3f3"
    },
    chevronContainer: {
        justifyContent: "center",
    }
})

export default SettingsItem;
