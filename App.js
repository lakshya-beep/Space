
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import ISSLocation from './screens/ISSLocation';
import MeteorScreen from './screens/MeteorScreen';


const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    <View>
   


    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>


    <Stack.Screen name= "Home" component={HomeScreen}/>
    <Stack.Screen name= "Meteor" component={MeteorScreen}/>
    <Stack.Screen name="ISSLocation" component={ISSLocation}/>
    </Stack.Navigator>

      
    </NavigationContainer>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
