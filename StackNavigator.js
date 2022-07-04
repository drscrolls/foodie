import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import GreetingComponent from './components/greeting_component';
import SearchButton from './components/buttons/search_button';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#f7f7f7',
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
          headerLeftContainerStyle: {
            marginStart: 10
          },
          headerRight: () => (
            <SearchButton />
          ),
          headerRightContainerStyle: {
            margin: 10
          },
        })}
      />
     
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
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
