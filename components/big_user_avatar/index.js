import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchButton from '../buttons/search_button';
import { Avatar } from 'react-native-elements'

const BigUserAvatar = () => {
    return (
        <View style={styles.avatarContainer}>
            <Avatar 
            source={{uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=300&q=80"}} 
            avatarStyle={styles.avatar} 
            size={90}
            rounded/>
        </View>
    );
}

const styles = StyleSheet.create({

    avatarContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
})

export default BigUserAvatar;
