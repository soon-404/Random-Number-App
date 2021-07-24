import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Alphabet from './Alphabet';
import Numbers from './Numbers';
import Day7 from './Day7';


const Stack = createStackNavigator();

export default function App(){
  const [func,setfunc] = useState();
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
              component = {Alphabet}
              initialParams = {{ bg : 'grey'}}>
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
      <View style={styles.listFunc}>
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
      <View style={styles.add}>
        
      </View>
      <View style={styles.setting}>
        <TouchableOpacity style={styles.white}></TouchableOpacity>
        <TouchableOpacity style={styles.dark}></TouchableOpacity>

      </View>

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
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderRadius: 15
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  listFunc: {
    // backgroundColor: 'green',
    width: '100%',
    height: '60%',
    alignItems: 'center'
    
  },
  add: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '15%'
  },
  setting: {
    // backgroundColor: 'red',
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  white: {
    backgroundColor: 'grey',
    borderRadius: 10,
    width: '10%',
    height: '60%',
    marginLeft: '5%',
  },
  dark: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: '10%',
    height: '60%',
    marginLeft: '5%',
  }
});
