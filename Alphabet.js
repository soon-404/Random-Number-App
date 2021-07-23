import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Alphabet({navigation}) {

  const [rand, setRand] = useState('A-Z');
  const handleRand = () => {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = characters[Math.floor(Math.random() * (26 - 0) + 0)]
    setRand(result);
  }

  const pressHandler = () => {
    navigation.goBack('screenMainMenu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainFunction}>
        <Text style={styles.title}>Random Alphabet</Text>
        <Text style={styles.result}>{rand}</Text>
          <TouchableOpacity
            onPress={()=>handleRand()}
            style={styles.randButton}>
            <Text style={styles.randText}>Press</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.changeMode}>
        <Button title = 'Menu' onPress={pressHandler}></Button>
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

  mainFunction: {
    alignItems: 'center',
    height: '80%',
    width: '100%',
    // backgroundColor: 'yellow'
  },

  title:{  
    paddingTop: '20%',
    fontSize: 30,
  },

  randButton:{ 
    backgroundColor: 'green',
    width: '30%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%',
    borderRadius: 15
  },

  randText:{
    color: 'white',
    fontSize: 25
  },

  result:{
    marginTop: '45%',
    fontSize: 40
  },

  changeMode:{
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'

  },
});


