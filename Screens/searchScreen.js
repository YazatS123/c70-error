import * as React from 'react';
import {Text, View, StyleSheets} from 'react-native';
export default class SearchScreen extends React.Component{
  render(){
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Search for a book here</Text>
      </View>
    )
  }
}