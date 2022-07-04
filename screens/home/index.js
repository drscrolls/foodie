import React from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';
import HomeCategoryList from '../../components/lists/home_category_list';
import HomeFoodGridList from '../../components/lists/home_food_grid_list';
import StoreList from '../../components/lists/store_list';
import LocationPicker from '../../components/location_picker';

const wait = (timeout) => { 
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Home = ({navigation}) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(750).then(() => setRefreshing(false));
  }, []);
  
    return (
        <ScrollView 
            style={styles.container}
            bounces={true}
            refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
            }>
            <LocationPicker />
            <HomeCategoryList />
            <StoreList navigation={navigation} />
            <HomeFoodGridList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Home;
