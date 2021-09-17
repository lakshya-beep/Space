import * as React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';

export default class ISSLocation extends React.Component {
    render(){
    return (
        <View >
          <Text>International Space Station Location!</Text>
          <StatusBar style="auto" />
        </View>
      );
    }
}