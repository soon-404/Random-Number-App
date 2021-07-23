import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function screen1() {
  const [valMin, setMin] = useState(0);
  const [valMax, setMax] = useState(100);
  const [rand, setRand] = useState(0);
  const [mode,setMode] = useState(false);
  const handleRand = (valMin,valMax) => {
    valMin = Math.ceil(valMin);
    valMax = Math.floor(valMax) + 1;
    setRand(Math.floor(Math.random() * (valMax - valMin) + valMin));
  }

  const pressHandler = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainFunction}>
        <Text style={styles.title}>Random Number</Text>
        <Text style={styles.result}>{rand}</Text>
        <View style={styles.maxminArea}>
          <TextInput
            style={styles.minText}
            placeholder='min'
            // keyboardType= 'number-pad'
            onChangeText={(val) => setMin(val)} />
          <TextInput
            style={styles.maxText}
            placeholder='max'
            onChangeText={(val)=> setMax(val)}
          />
        </View>
          <TouchableOpacity
            onPress={()=>handleRand(valMin,valMax)}
            style={styles.randButton}>
            <Text style={styles.randText}>Press</Text>
          </TouchableOpacity>
        {/* <Text style={styles.result}>{rand}</Text> */}
      </View>
      <View style={styles.changeMode}>
        {/* <Switch value={mode} onValueChange={()=>setMode((value) => !value)}></Switch> */}
        <Button title = 'alp' onPress={pressHandler}></Button>
      </View>
    </View>
  );
}

export default function App(){
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name = 'Screen1'
              component = {screen1}>
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
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

  maxminArea:{
    flexDirection: 'row',
    height: '20%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },

  randButton:{ 
    backgroundColor: 'green',
    width: '30%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 15
  },

  randText:{
    color: 'white',
    fontSize: 25
  },

  result:{
    marginTop: '25%',
    fontSize: 40
  },

  changeMode:{
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'

  },
  minText:{
    width: '30%',
    height:'40%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderRadius: 15

  },
  maxText:{
    width: '30%',
    height:'40%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderRadius: 15
  }
});
