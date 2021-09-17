import * as React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

export default class MeteorScreen extends React.Component {
    render(){
    return (
        <View>
          <Text>Meteor Screen!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
}