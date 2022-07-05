import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const welcomeImage = require('../../assets/welcome.png');
const {height, width} = Dimensions.get('window');
const containerHeight = (75/100)  * height;

const SignUp = ({ navigation }) => {

    return (
        <ScrollView
            style={styles.container}
            bounces={true}>
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Create an account</Text>
                </View>
                <View style={styles.textContainer}>
                    <Input
                        inputStyle={{outlineStyle: "none"}}
                        placeholder='Firstname'
                        leftIcon={<Feather name="user" size={20} color="black" />}
                    />
                    <Input
                        inputStyle={{outlineStyle: "none"}}
                        placeholder='Lastname'
                        leftIcon={<Feather name="user" size={20} color="black" />}
                    />
                    <Input
                        inputStyle={{outlineStyle: "none"}}
                        placeholder='Email'
                        leftIcon={<MaterialCommunityIcons name="email-outline" size={20} color="black" />}
                    />
                    <Input
                        inputStyle={{outlineStyle: "none"}}
                        placeholder='Password'
                        secureTextEntry={true}
                        leftIcon={<MaterialIcons name="lock-outline" size={20} color="black" />}
                    />
                </View>
                <View style={styles.buttonContainer}>
                        
                    <Button
                            title="Sign up"
                            loading={false}
                            loadingProps={{ size: 'small', color: 'white' }}
                            buttonStyle={{
                                backgroundColor: '#333544',
                                borderRadius: 5,
                                width: "100%",
                                height: 50,
                            }}
                            titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                            containerStyle={{
                                width: "100%",
                            }}
                            onPress={() => console.log('aye')}
                        />

                </View>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.linkContainer}>
                    <Text style={styles.link}>Already have an account? Login</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "#f4feff",
        height: "100%"
    },
    backdrop: {
        width: "100%",
        height: containerHeight,
        resizeMode: "contain"
    },
    content: {
        position: "relative",
        marginTop: 30
    },  
    textContainer: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
        marginTop: 30
    }, 
    linkContainer: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30,
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        paddingHorizontal: 30,
        marginTop: 20
    },
    title: {
        fontWeight: "bold",
        width: "100%",
        fontSize: 26,
        alignContent: "center",
        textAlign: "center"
    },
    darkButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        fontWeight: "bold",
        width: "100%",
        flex: 0.5
    },
    subtext: {
        width: "100%",
        fontSize: 14,
        fontWeight: "400",
        alignContent: "center",
        textAlign: "center",
        // color: "#666",
        marginTop: 10
    },
    link: {
        width: "100%",
        fontSize: 14,
        color: "#444",
        fontWeight: "400",
        alignContent: "center",
        textAlign: "center",
    },

})

export default SignUp;
