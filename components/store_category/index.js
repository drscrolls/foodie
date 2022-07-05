import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchButton from '../buttons/search_button';
import { Avatar } from 'react-native-elements'

const StoreCategory = ({category}) => {
    // console.log("category", category);
    const {image, name} = category.item;
    return (
        <View style={styles.container}>
           <Avatar 
            source={{uri: image}} 
            size={60}
            containerStyle={styles.category}
            avatarStyle={styles.icon}
            rounded/>
            <Text style={styles.cat_text}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginLeft: 20,
        alignItems: "center"
    },
    category: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: "#eee",
        borderRadius: 50,
        resizeMode: "contain"
    },
    icon: {
        resizeMode: "center"
    },
    cat_text : {
        justifyContent: "center",
        marginTop: 5,
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center",
        // color: "#333"
    }
})

export default StoreCategory;
