import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import UserAvatar from '../user_avatar';
import SearchButton from '../buttons/search_button';

const HeaderRightComponent = () => {
    return (
        <View style={styles.container}>
            <View>
                <SearchButton />
            </View>
            <TouchableOpacity style={styles.avatarContainer}>
                <UserAvatar />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    avatarContainer: {
        marginLeft: 10,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
    }
})

export default HeaderRightComponent;
