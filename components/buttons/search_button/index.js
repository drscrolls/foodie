import React from 'react';
import { Feather } from '@expo/vector-icons';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';

const SearchButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.search_btn}>
                <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        margin: 8
    },
    search_btn: {
        borderRadius: 50,

        width: 24,
        height: 24,
    },

})

export default SearchButton;
