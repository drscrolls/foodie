import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SnackNotification from '../../components/alerts/snack_notification';
import BigUserAvatar from '../../components/big_user_avatar';
import SettingsItem from '../../components/settings/link';


const settingsOptions = [
    {
        "title": "General",
        "settings": [{
            "name": "My Account",
            "icon": ""
        }]
    }
]

const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <BigUserAvatar />
            <View style={styles.textContainer}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@gmail.com</Text>
            </View>

            <SnackNotification />
            
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.settingsTitle}>General</Text>
                </View>

                <View style={styles.listContainer}>
                    <SettingsItem icon="wallet" name="Billing/Payment" />
                </View>
            </View>

            <View style={styles.listGroup}>
                <View style={styles.textContainer}>
                    <Text style={styles.settingsTitle}>Settings</Text>
                </View>

                <View style={styles.listContainer}>
                    <SettingsItem icon="globe" name="Language" />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
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

export default Profile;
