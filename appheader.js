import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';


export default class AppHeader extends React.Component {
    render(){
    return (
        <View>
            <Text style={styles.title}>ISSTracker</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    title:{
        color: "red",
        fontSize:50,
        backgroundColor:"blue",
        alignItems: 'center',
        justifyContent: 'center',
        letteSpacing: 5,
    }
})