import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Card, Text } from 'react-native-elements'

const Category = ({navigation, route, category}) => {
    // console.log("category", category);
    const cat = category.item;
    return (
        <TouchableOpacity style={styles.container}>
            <Card.Image style={styles.img} source={{ uri: cat.image }} />
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
