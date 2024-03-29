import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, Pressable } from 'react-native';
import { Avatar } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import WhiteIconButton from '../buttons/white_icon_button';

const {height, width} = Dimensions.get('window');
const containerWidth = (80/100)  * width;


const StoreHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <Image style={styles.backdrop} source={{ uri: "https://cdn.wallpapersafari.com/17/23/upPMRH.jpg" }} />
            <View style={styles.logoContainer}>
                <Avatar avatarStyle={styles.logo} source={{ uri: "https://cdn.cafeata.com/photos/photo_0x6b909e04178484eb_0xefb3b8da0b6d2d7e_16252820050390627.jpg" }} title="" size={70} rounded={true} />
                <View style={styles.storeTitleContainer}>
                    <Text style={styles.storeTitle}>Macdonalds</Text>
                </View>
                <View style={styles.deliveryTextContainer}>
                    <MaterialIcons name="delivery-dining" size={24} color="black" />
                    <Text style={styles.deliveryText}>20 min</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative"
    },
    buttonsContainer: {
        width: "100%",
        position: "absolute",
        zIndex: 1,
        paddingLeft: 20,
        paddingTop: 10
    },
    backdrop: {
        width: "100%",
        height: 160
    }, 
    storeTitle: {
        fontWeight: "bold",
        width: "100%",
        fontSize: 18,
        marginLeft: 10
    },
    storeTitleContainer: {
        // borderColor: "white",
        // backgroundColor: '#fff',
        bottom: -40,
        flexDirection: "row",
        // paddingHorizontal: 10
    },
    logo: {
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 50
    },
    img: {
        height: 80,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        margin: 0
    },
    logoContainer: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "absolute",
        bottom: -35,
        paddingHorizontal: 20,
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    store_name: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "700"
    },
    storenameContainer: {
        width: "100%",
        marginTop: 30
    },
    deliveryTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "absolute",
        top: 40,
        right: 10
    },
    deliveryText: {
        marginLeft: 5,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 12,
        // color: "#666",
        fontWeight: "600"
    }
})

export default StoreHeader;
