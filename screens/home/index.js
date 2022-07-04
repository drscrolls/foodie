import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Category from '../../components/category';
import HomeCategoryList from '../../components/lists/home_category_list';
import LocationPicker from '../../components/location_picker';

const Home = () => {
    return (
        <View>
            <LocationPicker />
            <HomeCategoryList />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
