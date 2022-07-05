import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements'

const StoreCard = ({navigation, route, store}) => {
    console.log("store", store);
    // console.log("navigation ic", navigation);

    const {backdrop, logo, name, backgroundColor, textColor} = store.item;
    return (
        <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate("Store", {backgroundColor: backgroundColor, textColor: textColor})}>

            <View style={styles.store_card}>
                <View>
                    <Card.Image style={styles.img} source={{uri: backdrop}} />
                    <View style={styles.logoContainer}>
                        <Avatar avatarStyle={styles.logo} source={{ uri: logo }} title="" size="medium" rounded={true} />
                    </View>
                </View>

                <View style={styles.storenameContainer}>
                    <Card.Title>
                        <Text style={styles.store_name}>{name}</Text>
                    </Card.Title>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        width: 160
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
        height:80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
    storenameContainer: {
        width: "100%",
        marginTop: 30
    }
})

export default StoreCard;
