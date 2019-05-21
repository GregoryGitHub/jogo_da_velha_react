/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,TouchableWithoutFeedback, Text, View} from 'react-native';


export class Box extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback
      onPress={this.props.onPress}
      >
        <View style={{flex:1, justifyContent:"center",borderWidth:2,borderColor:"#7b1fad",backgroundColor:"#9724d6"}}>
          <Text style={{   textAlign:"center", color:"#fff", alignItems:"center", fontSize:60 }}>{ this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


