
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
// import beePic, {  } from 'beePic.ios.js'
export default class projectname extends Component {
  render() {
    let pic = {
      uri: 'https://www.dover.gov.uk/Environment/Environmental-Health/Pest-Control/bee.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 50, height: 50}}/>
        <Text style={styles.welcome}>
        <Image source={pic} style={{width: 50, height: 50}}/>  Hello wORLD!<Image source={pic} style={{width: 50, height: 50}}/>
        </Text>
        <Text style={styles.instructions}>
          <Image source={pic} style={{width: 50, height: 50}}/>To get started, edit index.ios.js<Image source={pic} style={{width: 50, height: 50}}/>
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}<Image source={pic} style={{width: 50, height: 50}}/>
          Cmd+D or shake for dev menu<Image source={pic} style={{width: 50, height: 50}}/>
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('projectname', () => projectname);
