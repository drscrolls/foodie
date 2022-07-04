import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import GreetingComponent from './components/greeting_component';
import SearchButton from './components/buttons/search_button';
import HeaderRightComponent from './components/header_right_component';
import Profile from './screens/profile';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
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
          },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: '700',
          // },
        }} />
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
