/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import s from "./Styles"
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';


const App = () => {

  return (

    <SafeAreaView>
      <Text style={s.t1}>Welcome To The Task Orbit</Text>
    </SafeAreaView>
  
  );
}


export default App;