import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons';

const BigStoreCard = ({navigation, route, store}) => {
    // console.log("store", store);

    const {backdrop, logo, name, location, delivery_time} = store.item;
    return (
        <TouchableOpacity style={styles.container}>

            <View style={styles.store_card}>
                <View>
                    <Card.Image style={styles.img} source={{uri: backdrop}} />
                    <View style={styles.logoContainer}>
                        <Avatar avatarStyle={styles.logo} source={{ uri: logo }} title="" size="medium" rounded={true} />
                    </View>
                </View>

                <View style={styles.storenameContainer}>
                        <Text style={styles.store_name}>{name}</Text>
                </View>
                <View style={styles.storelocationContainer}>
                    <Card.Title style={styles.locationCard}>
                        <Text style={styles.store_location}>{location}</Text>
                    </Card.Title>
                </View>
                <View style={styles.storelocationContainer}>
                    <Card.Title style={styles.deliveryCard}>
                        <View style={styles.deliveryTextContainer}>
                            <MaterialIcons name="delivery-dining" size={24} color="black" />
                            <Text style={styles.deliveryText}>{delivery_time} min</Text>
                        </View> 
                    </Card.Title>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: "45vw",
    },
    store_card: {
        padding: 0,
        borderRadius: 20,
        borderWidth: 3, 
        borderColor: "white",
        backgroundColor: '#fff'
    },
    logo: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 50
    },
    img: {
        height:90,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        margin: 0
    },
    logoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -25
    },
    store_name: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "700"
    },
    store_location: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 12,
        color: "#666",
        fontWeight: "400"
    },
    storenameContainer: {
        width: "100%",
        marginTop: 30
    },
    storelocationContainer: {
        width: "100%",
    },
    locationCard: {
        marginBottom: 5
    },
    deliveryCard: {
        marginBottom: 10
    },
    deliveryTextContainer: {
        flexDirection: "row",
    },
    deliveryText: {
        marginLeft: 5,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 12,
        color: "#666",
        fontWeight: "400"
    }
})

export default BigStoreCard;
