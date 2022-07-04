import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Card, Text } from 'react-native-elements'

const Category = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Card.Image style={styles.img} source={ "https://media.istockphoto.com/photos/pasta-salad-bowl-with-broccoli-tomato-onion-olives-corn-salad-and-picture-id1352898440?b=1&k=20&m=1352898440&s=170667a&w=0&h=8phYjp9eG8crpa3x_wYZATJjadVmvfcS2dEVMLCvXQs="} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    img: {
        height: 70,
        width: 100,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    }
})

export default Category;
