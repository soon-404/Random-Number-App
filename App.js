import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Alphabet from './Alphabet';
import Numbers from './Numbers';
import Day7 from './Day7';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
            <Stack.Screen
              name = 'screenMainMenu'
              component = {MainMenu}>
            </Stack.Screen>
           
            <Stack.Screen
              name = 'screenNumbers'
              component = {Numbers}>
            </Stack.Screen>

            <Stack.Screen
              name = 'screenAlphabet'
              component = {Alphabet}>
            </Stack.Screen>

            <Stack.Screen
              name = 'screenDay7'
              component = {Day7}>
            </Stack.Screen>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

function MainMenu({navigation}) {
  const pressAlphabet = () => {
    navigation.navigate('screenAlphabet');
  }

  const pressNumber = () => {
    navigation.navigate('screenNumbers');
  }

  const pressDay7 = () => {
    navigation.navigate('screenDay7');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>RANDOMY</Text>
      <TouchableOpacity
            onPress={pressNumber}
            style={styles.buttonFunction}>
            <Text style={styles.buttonText}>Number</Text>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={pressAlphabet}
            style={styles.buttonFunction}>
            <Text style={styles.buttonText}>Alphabet</Text>
      </TouchableOpacity>

      <TouchableOpacity
            onPress={pressDay7}
            style={styles.buttonFunction}>
            <Text style={styles.buttonText}>7 Day</Text>
      </TouchableOpacity>

      <TouchableOpacity
            // onPress={pressAlphabet}
            style={styles.buttonFunction}>
            <Text style={styles.buttonText}>Custom</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  appName: {
    marginTop: 65,
    fontSize: 35,
    marginBottom: 10,
  },
  buttonFunction: {
    backgroundColor: 'blue',
    width: '80%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
});
