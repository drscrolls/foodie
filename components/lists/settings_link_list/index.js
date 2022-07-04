import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import Category from '../../category';
import SettingsLink from '../../settings/link';

const SettingLinkedList = () => {
    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.cat_title}>General</Text>
            </View>

            <View>
                <SettingsLink icon="wallet" />
            </View>
                
        </View>
    );
}

const styles = StyleSheet.create({
    
    textContainer: {
        width: "100%",
        flexDirection: "row"
    },
    linkContainer: {
        justifyContent: "center",
    },
    cat_title: {
        fontSize: 14,
        marginBottom: 10,
        marginTop: 15,
        marginHorizontal: 15,
        fontWeight: "700",
        flex: 1
    },
    link : {
        color: "#f27e4f",
        alignSelf: "flex-end",
        textAlign: "right",
        fontSize: 12,
        marginHorizontal: 20,
        fontWeight: "400",
        justifyContent: "center",
    }
})

export default SettingLinkedList;
