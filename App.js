import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screens/auth/Login';
import Home from './src/Screens/Home';
import Register from './src/Screens/auth/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  


const Stack = createNativeStackNavigator();



 function App() {


  return (

     <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name= "Home" component = {Home}/>
      <Stack.Screen name= "Login" component = {Login}/>
      <Stack.Screen name= "Register" component = {Register}/>
    </Stack.Navigator>

    
      
      </NavigationContainer>
  );
   
   



  
  }
  export default App;
