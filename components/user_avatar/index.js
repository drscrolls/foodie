import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchButton from '../buttons/search_button';
import { Avatar } from 'react-native-elements'

const UserAvatar = () => {
    return (
        <View>
            <Avatar source={{uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=300&q=80"}} style={styles.avatar} title="" size="small" rounded={true}/>
        </View>
    );
}

const styles = StyleSheet.create({

    avatar: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: "50%",
        height: 40,
        width: 40
    },
})

export default UserAvatar;
