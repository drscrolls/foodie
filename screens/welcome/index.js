import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

const welcomeImage = require('../../assets/welcome.png');
const {height, width} = Dimensions.get('window');
const containerHeight = (75/100)  * height;

const Welcome = ({ navigation }) => {

    return (
        <ScrollView
            style={styles.container}
            bounces={true}>
            <Image style={styles.backdrop} source={welcomeImage} />
            <View style={styles.content}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Hi, we're Amelia 👋</Text>
                    <Text style={styles.subtext}>We're giving your hunger a new option, good food is what you deserve</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Log in"
                        loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            borderColor: '#333544',
                            borderRadius: 5,
                            width: "100%",
                            height: 50,
                        }}
                        type="outline"
                        titleStyle={{ color: '#333544',fontWeight: 'bold', fontSize: 16 }}
                        containerStyle={{
                            width: "45%",
                        }}
                        onPress={()=> navigation.navigate("Login")}
                    />

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
                            width: "45%",
                        }}
                        onPress={()=> navigation.navigate("SignUp")}
                    />


                </View>
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
        position: "relative"
    },  
    textContainer: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 30
    },
    buttonContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        marginTop: 30
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

})

export default Welcome;
