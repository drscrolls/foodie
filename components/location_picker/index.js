import React from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { BottomSheet, Card, Text } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const LocationPicker = ({onPress}) => {
    return (
        <Pressable>
            <View style={styles.locationCardContainer}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=> onPress()} style={styles.iconBg}>
                        <Ionicons name="ios-location-sharp" size={24} color="#5a61cb" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> onPress()} style={styles.locationContainer}>
                        <Text style={styles.locationTitle}>My location</Text>
                        <Text style={styles.locationTxt}>243 Pond Rd, Shaboro North</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> onPress()} style={styles.chevronContainer}>
                        <Feather name="chevron-right" size={20} color="black" />
                    </TouchableOpacity>
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
        borderRadius: 50,
        backgroundColor: '#eceff6',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    locationTxt: {
        fontSize: 14,
        fontWeight: "700"
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

export default LocationPicker;
