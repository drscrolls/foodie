import React from 'react';
import {View, StyleSheet, Text, ScrollView, RefreshControl} from 'react-native';
import SnackNotification from '../../components/alerts/snack_notification';
import BigUserAvatar from '../../components/big_user_avatar';
import AllStoresList from '../../components/lists/all_stores_list';
import TypesOfStoresList from '../../components/lists/types_of_stores_list';
import SettingsItem from '../../components/settings/link';


const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const AllStores = () => {

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
            
            <TypesOfStoresList />
            <AllStoresList />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7'
    },
    listGroup: {
        marginTop: 20
    },
    settingsTitle: {
        color: "#aaa",
        textAlign: "left",
        alignSelf: "flex-start",
        marginHorizontal: 15,
        fontWeight: "500"
    },  
    userEmail: {
        fontSize: 14,
        color: "#888",
        fontWeight: "300"
    },
    userName: {
        fontSize: 26,
        fontWeight: "700"
    },
    textContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AllStores;
