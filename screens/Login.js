import React from 'react';
import {View,Button,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            
            <Button onPress={() => navigation.navigate("Details",{name: "Anand", company: "Xcube"})} title="Login"/>
            
        </View>
    )
}
export default Login