import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Category from '../../components/category';
import SquareFood from '../../components/food/square_layout_food';
import HomeCategoryList from '../../components/lists/home_category_list';
import HomeFoodGridList from '../../components/lists/home_food_grid_list';
import StoreList from '../../components/lists/store_list';
import LocationPicker from '../../components/location_picker';
import StoreCard from '../../components/store_card';

const Home = () => {
    return (
        <ScrollView>
            <LocationPicker />
            <HomeCategoryList />
            <StoreList />
            <HomeFoodGridList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Home;
