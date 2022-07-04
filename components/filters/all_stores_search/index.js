import React from 'react';
import { StyleSheet, View ,  TouchableOpacity} from 'react-native';
import { Avatar, Badge} from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';

const AllStoresSearch = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.btn}>
                <Feather style={styles.icon} name="search" size={24} color="black" />
                <TextInput style={styles.input} placeholder="Search Restaurant" placeholderTextColor={"#999"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
        // width: "80vw",
    },
    btn: {
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#ddd",
        backgroundColor: '#fff',
        padding: 4,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        height: 50
    },
    icon: {
        borderRightWidth: 1,
        borderRightColor: "#ddd",
        margin: 6,
        paddingRight: 10
    },
    input: {
        outline: "none",
        borderWidth: 0,
        outlineStyle: 'none',
        padding: 0,
        margin: 0,
        width: "100%",
    }
})

export default AllStoresSearch;
