import React from 'react';
import { StyleSheet, View ,  TouchableOpacity} from 'react-native';
import { Avatar, Badge} from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const WhiteIconButton = ({navigation, onPress, buttonStyle, icon, iconColor, iconSize}) => {
    

    return (
        <TouchableOpacity style={styles.container} onPress={()=> onPress()}>
            <View style={[styles.btn, buttonStyle]}>
                <Feather name={icon} size={iconSize} color="black" />
              {/* <Badge
                status="error"
                value={1}
                containerStyle={{ position: 'absolute', top: -4, right: -4 }}
              /> */}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginRight: 10
    },
    btn: {
        borderRadius: 50,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    }
})

export default WhiteIconButton;
