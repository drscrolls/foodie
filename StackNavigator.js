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
import Store from './screens/store';
import WhiteIconButton from './components/buttons/white_icon_button';
import Welcome from './screens/welcome';
import Login from './screens/login';
import SignUp from './screens/signup';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'
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
          title: "",
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
          // title: '',
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
          headerTitle: () => (
            <AllStoresSearch
              navigation={navigation} />
          ),

        })} />


      <Stack.Screen
        name="Store"
        component={Store}
        options={({ navigation, route }) => ({
          title: '',
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: route.params.textColor
          },
          headerTransparent: true,
          cardStyle: {
            backgroundColor: '#f7f7f7',
          },
          headerLeft: () => (
            <WhiteIconButton
              onPress={() => navigation.goBack()}
              navigation={navigation}
              iconColor={"black"}
              iconSize={22}
              icon={"chevron-left"}
              buttonStyle={{ marginLeft: 10, width: 45, height: 45 }} />
          ),
          headerStyle: {
            marginHorizontal: 20
          }

        })} />



      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={({ navigation, route }) => ({
          headerShown: false
        })} />

      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation, route }) => ({
          headerShown: false
        })} />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation, route }) => ({
          headerShown: false
        })} />
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
