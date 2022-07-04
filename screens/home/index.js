import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LocationPicker from '../../components/location_picker';

const Home = () => {
    return (
        <View>
            <LocationPicker />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
