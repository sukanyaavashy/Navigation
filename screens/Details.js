import React,{useEffect} from 'react'
import {View,Button,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Details = ({navigation, route}) => {
    const params = route.params;

    useEffect(() => {

        console.log('navigation params============>',JSON.stringify(params))
        AsyncStorage.getItem('name').then((value) => {
            console.log(JSON.stringify(value));
        })

    },[])
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:"red" ,fontSize:30}}>{params.name}</Text>
            <Text style={{color:"red" ,fontSize:30}}>{params.company}</Text>
            <Button onPress= {() => navigation.navigate('Listing')} title="Logout"/>

            
        </View>
    )
}
export default Details