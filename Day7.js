import React, {useState} from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Day7({navigation}) {

  const [rand, setRand] = useState('Monday');
  const [colorDay, setColorDay] = useState('yellow')
  const handleRand = () => {
    var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    var color = ['yellow','pink','green','orange','blue','purple','red']
    var result = Math.floor(Math.random() * (7 - 0) + 0)
    setColorDay(color[result])
    setRand(day[result]);
  }

  const pressHandler = () => {
    navigation.goBack('screenMainMenu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainFunction}>
       
        <Text style={styles.title}>Random 7 Day</Text>
        <View style={styles.colorText}>
          <View style={squareColor(colorDay)}></View>
          <Text style={styles.result}>{rand}</Text>
        </View>
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
    // marginTop: '45%',
    fontSize: 40
  },

  changeMode:{
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
   colorText:{
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '35%'
   }
});

const squareColor = (option) => {
    return  {
        width: 30,
        height: 30,     
        backgroundColor: option,
        borderRadius: '15%',
        marginRight: '5%',
        borderColor: 'black',
        borderWidth: 1
        
    }
}


