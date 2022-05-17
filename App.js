import React,{useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login'
import DetailsScreen from './screens/Details'
import ListingScreen from './screens/Listing'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const MyStack = () => {

  const [login, setLogin] =useState(false);

  useEffect(() => {
    AsyncStorage.getItem("login").then((value)=> {
      setLogin(value)
    })
  }, []);

  loginStack

  homeStack


  return (
    <NavigationContainer>


      {/* <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title:'Login'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Listing" component={ListingScreen} />
      </Stack.Navigator> */}
      {login ?
      homeStack
      :
      loginStack
      }




    </NavigationContainer>
  );
};

export default MyStack