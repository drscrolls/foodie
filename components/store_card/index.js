import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements'

const StoreCard = () => {
    return (
        <TouchableOpacity style={styles.container}>


            <Card>
                <View>
                    <Card.Image source={"https://i.insider.com/62212e77d72a250019740059?width=700"} />

                    <View style={styles.logoContainer}>
                        <Avatar source={{ uri: "https://cdn.cafeata.com/photos/photo_0x6b909e04178484eb_0xefb3b8da0b6d2d7e_16252820050390627.jpg" }} title="" size="medium" rounded={true} />
                    </View>
                </View>

                <View style={styles.storenameContainer}>

                    <Card.Title style={styles.store_name}>
                        Hello
                    </Card.Title>
                </View>



            </Card>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    img: {
        height: 70,
        width: 100,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        zIndex: 0,
        position: "absolute"
    },
    logoContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "-25px"
    },
    store_name: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 17,
        fontWeight: 600
    },
    storenameContainer:{
        width: "100%",
        marginTop: 40
    }
})

export default StoreCard;
