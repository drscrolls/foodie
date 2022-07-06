import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const axios = require('axios').default;

const welcomeImage = require('../../assets/welcome.png');
const { height, width } = Dimensions.get('window');
const containerHeight = (75 / 100) * height;



export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isSubmitting: false,
            navigation: props.navigation
        };

        // console.log("this.state", this.state);

    }

    // save = async (key, value) => {
    //     await SecureStore.setItemAsync(key, value);
    // }

    // getValueFor = async (key) => {
    //     let result = await SecureStore.getItemAsync(key);
    //     if (result) {
    //         alert("🔐 Here's your value 🔐 \n" + result);
    //     } else {
    //         alert('No values stored under that key.');
    //     }
    // }

    login = async (react) => {

        const { email, password } = this.state;

        if (!email || !password) {
            alert("No email or password provided");
            return;
        }




        try {
            this.setState({ isSubmitting: true });
            const response = await axios.post('https://dry-mountain-98323.herokuapp.com/api/users/login', {
                email,
                password
            })
                .then(async function (response) {
                    // console.log("successful", response);
                    react.setState({ isSubmitting: false });
                    const token = response.data.data.token;
                    console.log("api_token:", token);
                    
                    await SecureStore.setItemAsync('token', token);
                    const stored_token = await SecureStore.getItemAsync('token');
                    console.log("stored_token:", stored_token);
                    console.warn("stored_token:", stored_token);

                    const navigation = react.state.navigation;
                    navigation.navigate("Home");
                })
                .catch(function (error) {
                    console.log("error", error);
                });
            // console.log(response);
        } catch (error) {
            console.warn("caught exception", error);
        }
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView
                style={styles.container}
                bounces={true}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Welcome</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Input
                            inputStyle={{ outlineStyle: "none" }}
                            placeholder='Your email'
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            leftIcon={<MaterialCommunityIcons name="email-outline" size={20} color="black" />}
                        />
                        <Input
                            inputStyle={{ outlineStyle: "none" }}
                            placeholder='Your password'
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                            leftIcon={<MaterialIcons name="lock-outline" size={20} color="black" />}
                        />
                    </View>
                    <View style={styles.buttonContainer}>

                        <Button
                            title="Log in"
                            loading={this.state.isSubmitting}
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
                            onPress={() => this.login(this)}
                        />

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={styles.linkContainer}>
                        <Text style={styles.link}>New here? Sign up</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
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

