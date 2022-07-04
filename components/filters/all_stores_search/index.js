import React from 'react';
import { StyleSheet, View ,  TouchableOpacity, Dimensions} from 'react-native';
import { Avatar, Badge} from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';


const {height, width} = Dimensions.get('window');
const searchWidth = (40/100)  * width;


const AllStoresSearch = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Feather style={styles.icon} name="search" size={24} color="black" />
                <TextInput style={styles.input} placeholder="Search Restaurant" placeholderTextColor={"#999"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginRight: 15,
        // width: searchWidth,
    },
    searchContainer: {
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#ddd",
        backgroundColor: '#fff',
        padding: 4,
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "flex-start",
        paddingHorizontal: 10,
        // width: "100%",
        height: 50
    },
    icon: {
        borderRightWidth: 1,
        borderRightColor: "#ddd",
        margin: 6,
        paddingRight: 10
    },
    input: {
        borderWidth: 0,
        outlineStyle: 'none',
        padding: 0,
        margin: 0,
        width: searchWidth,
        justifyContent: "center",
        alignSelf: "center",
    }
})

export default AllStoresSearch;
