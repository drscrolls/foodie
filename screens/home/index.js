import { Avatar } from 'react-native-elements'
import React, { useCallback } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl, Dimensions } from 'react-native';
import HomeCategoryList from '../../components/lists/home_category_list';
import HomeFoodGridList from '../../components/lists/home_food_grid_list';
import StoreList from '../../components/lists/store_list';
import LocationPicker from '../../components/location_picker';
import * as SecureStore from 'expo-secure-store';
import LocationBottomSheet from '../../components/location_bottom_sheet';

const axios = require('axios').default;


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            isSubmitting: false,
            isRefreshing: false,
            isBottomSheetShowing: false,
            navigation: props.navigation
        };

        // console.log("this.state", this.state);
    }

    getToken = async () => {
        return await SecureStore.getItemAsync('token');
    }


    async componentDidMount() {
        const token = await this.getToken();
        console.warn("home token:", token);
        this.setState({ token });
        console.log("home token state:", this.state.token);
    }

    toggleBottomNavigationView = () => {
        this.setState((state) => {
            return { isBottomSheetShowing: !state.isBottomSheetShowing };
        });
    };


    render() {
        const navigation = this.props.navigation;

        const wait = (timeout) => {
            return new Promise(resolve => setTimeout(resolve, timeout));
        }

        const onRefresh = () => {
            this.setState({ isRefreshing: true });
            wait(750).then(() => this.setState({ isRefreshing: false }));
        };

        return (
            <ScrollView
                style={styles.container}
                bounces={true}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => onRefresh()}
                    />
                }>
                <LocationPicker onPress={()=> this.toggleBottomNavigationView()} />
                <HomeCategoryList />
                <StoreList navigation={navigation} />
                <HomeFoodGridList />

                <LocationBottomSheet isSheetShowing={this.state.isBottomSheetShowing} toggleSheet={()=> this.toggleBottomNavigationView()} />
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({})

