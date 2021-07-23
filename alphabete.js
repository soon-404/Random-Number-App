// import React, {useState} from 'react';
import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function Alphabete() {
  return (
    <View style={styles.container}>
        <Text>Alphabete</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
});


