import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SnackNotification from '../../components/alerts/snack_notification';
import BigUserAvatar from '../../components/big_user_avatar';
import AllStoresList from '../../components/lists/all_stores_list';
import TypesOfStoresList from '../../components/lists/types_of_stores_list';
import SettingsItem from '../../components/settings/link';


const AllStores = () => {
    return (
        <ScrollView style={styles.container}>
            
            <TypesOfStoresList />
            <AllStoresList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7'
    },
    listGroup: {
        marginTop: 20
    },
    settingsTitle: {
        color: "#aaa",
        textAlign: "left",
        alignSelf: "flex-start",
        marginHorizontal: 15,
        fontWeight: "500"
    },  
    userEmail: {
        fontSize: 14,
        color: "#888",
        fontWeight: "300"
    },
    userName: {
        fontSize: 26,
        fontWeight: "700"
    },
    textContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AllStores;
