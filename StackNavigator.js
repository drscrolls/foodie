import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import GreetingComponent from './components/greeting_component';
import SearchButton from './components/buttons/search_button';
import HeaderRightComponent from './components/header_right_component';
import Profile from './screens/profile';
import AllStores from './screens/all_stores';
import AllStoresFilterButton from './components/filters/all_stores_filter_button';
import AllStoresSearch from './components/filters/all_stores_search';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='AllStores'
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#f2f2f2',
        },
        cardStyle: {
            backgroundColor: '#f2f2f2'
        }
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          title : "",
          headerLeft: () => (
            <GreetingComponent
              navigation={navigation}
              name="Andrew"
            />
          ),
          headerRight: () => (
            <HeaderRightComponent
            navigation={navigation} />
          )
        })}
      />
     
      <Stack.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: 'Profile',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#fff',
          },
          cardStyle: {
            backgroundColor: '#fff',
          }
        }} />


      <Stack.Screen 
        name="AllStores" 
        component={AllStores}
        options={({ navigation, route }) => ({
          title: '',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#fff',
          },
          cardStyle: {
            backgroundColor: '#f7f7f7',
          },
          headerRight: () => (
            <AllStoresFilterButton
            navigation={navigation} />
          ),
          headerLeft: () => (
            <AllStoresSearch
            navigation={navigation} />
          ),
        })}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StackNavigator;
