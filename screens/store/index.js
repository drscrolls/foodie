import React from 'react';
import {View, StyleSheet, ScrollView, Button} from 'react-native';
import StoreCategoryList from '../../components/lists/store_category_list';
import StoreHeader from '../../components/store_header';

const Store = ({navigation}) => {
    
    return (
        <ScrollView 
            style={styles.container}
            bounces={true}>
            <View style={styles.headerContainer}>
                <StoreHeader />
            </View>
            <StoreCategoryList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 60
    }
})

export default Store;
