import React from 'react';
import { Image } from 'react-native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar } from 'react-native-elements'

const SquareFood = ({food}) => {
    // console.log("food", food);
    const {image, name, price} = food.item;
    return (
        <TouchableOpacity style={styles.container}>

            <View style={styles.food_card}>
                <View>
                    <Card.Image style={styles.img} source={image} />
                </View>

                <View style={styles.textContainer}>
                    <Text numberOfLines={3} style={styles.title}>{name}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>Ghc{price}</Text>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        width: 160,
    },
    food_card: {
        padding: 5,
        borderRadius: 20,
        borderWidth: 3, 
        borderColor: "white",
        backgroundColor: '#fff'
    },
    logo: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: "50%"
    },
    img: {
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        margin: 0,
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
        fontSize: 14,
        fontWeight: 600
    },
    textContainer: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
    },
    title: {
        fontSize: 12,
        fontWeight: 600,
        textAlign: "left",
        marginLeft: 5,
        width: "65%",
        overflow: "hidden",
    },
    price: {
        fontSize: 12,
        fontWeight: 600,
        textAlign: "right",
    },
    priceContainer: {
        alignSelf: "center",
        width: "40%",
    }
})

export default SquareFood;
