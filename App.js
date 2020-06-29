import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

// const getFonts = () => Font.loadAsync({
//   'vincHand': require ('./assets/fonts/vincHand.ttf'),
//   'indieFlower' : require('./assets/fonts/IndieFlower-Regular.ttf')
// })

export default function App() {
    return (
      <SignupLoginScreen/>
    );
  
}
