import React, {useState} from 'react';
import { Button, StyleSheet, Switch, Text, TouchableOpacity, View, TextInput } from 'react-native';
export default function App() {
  const [valMin, setMin] = useState();
  const [valMax, setMax] = useState();
  const [rand, setRand] = useState();
  const [mode,setMode] = useState(false);
  const handleRand = () => {
    setRand(Math.floor(Math.random()*100));
  }
  return (
    <View style={styles.container}>
      <View style={styles.mainFunction}>
        <Text style={styles.title}>Random Number</Text>
        <TextInput
            style={styles.minText}
            placeholder='min'
            // keyboardType= 'number-pad'
            onChangeText={(vakMax) => setMin} />
        <View style={styles.randArea}>
          <TouchableOpacity
            onPress={()=>handleRand()}
            style={styles.randButton}>
            <Text style={styles.randText}>Press</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.result}>{rand}</Text>
      </View>
      <View style={styles.changeMode}>
        <Switch value={mode} onValueChange={()=>setMode((value) => !value)}></Switch>
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
    // backgroundColor: 'blue'
  },
  title:{  
    paddingTop: '20%',
    fontSize: 30,
  },
  randArea:{
    marginTop: '20%',
    width: '30%',
    height: '10%',
    backgroundColor: 'blue'
  },
  randButton:{ 
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  randText:{
    color: 'white',
    fontSize: 25
  },
  result:{
    marginTop: '50%',
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
    height:'5%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: '10%',
    paddingHorizontal: 10
  }
});
