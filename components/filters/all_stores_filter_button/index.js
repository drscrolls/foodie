import React from 'react';
import { StyleSheet, View ,  TouchableOpacity} from 'react-native';
import { Avatar, Badge} from 'react-native-elements'
import { Feather } from '@expo/vector-icons';

const AllStoresFilterButton = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.btn}>
                <Feather name="sliders" size={24} color="black" />
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
        // flexDirection: "row",
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginRight: 10
    },
    btn: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        backgroundColor: '#fff',
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 50
    }
})

export default AllStoresFilterButton;
