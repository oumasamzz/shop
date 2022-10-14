import {Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({navigation}) {
   
    return (
      <View>
        <Text>Home</Text>

         <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
       <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      </View>
    )
  }


export default Home