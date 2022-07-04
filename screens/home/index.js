import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import HomeCategoryList from '../../components/lists/home_category_list';
import HomeFoodGridList from '../../components/lists/home_food_grid_list';
import StoreList from '../../components/lists/store_list';
import LocationPicker from '../../components/location_picker';

const Home = ({navigation}) => {
    return (
        <ScrollView >
            <LocationPicker />
            <HomeCategoryList />
            <StoreList navigation={navigation} />
            <HomeFoodGridList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Home;
