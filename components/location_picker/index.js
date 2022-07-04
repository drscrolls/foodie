import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import { BottomSheet, Card, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';

const LocationPicker = () => {
    return (
        <Pressable>
            <View style={styles.locationCardContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.iconBg}>
                        <Ionicons name="ios-location-sharp" size={24} color="#5a61cb" />
                    </View>

                    <View style={styles.locationContainer}>
                        <Text style={styles.locationTitle}>My location</Text>
                        <Text style={styles.locationTxt}>243 Pond Rd, Shaboro North</Text>
                    </View>

                    <View style={styles.chevronContainer}>
                        <Feather name="chevron-right" size={20} color="black" />
                    </View>
                </View>
                
            </View>
        </Pressable>
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
        borderRadius: "50%",
        backgroundColor: '#eceff6',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    locationTxt: {
        fontSize: 14,
        fontWeight: 500
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
    locationCardContainer: {
        borderColor: "white",
        margin: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
    },
    chevronContainer: {
        justifyContent: "center",
        
    }
})

export default LocationPicker;
