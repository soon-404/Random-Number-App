import React, {useState} from 'react';
import { Button, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
export default function App() {
  const [rand, setRand] = useState();
  const [mode,setMode] = useState(false);
  const handleRand = () => {
    setRand(Math.floor(Math.random()*100));
  }
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Random Number</Text>
      <View style={styles.randArea}>
        <TouchableOpacity
          onPress={()=>handleRand()}
          style={styles.randButton}>
          <Text style={styles.randText}>Press</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>{rand}</Text>
      <Switch value={mode} onValueChange={()=>setMode((value) => !value)}></Switch>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  title:{  
    paddingTop: '20%',
    fontSize: 30,
  },
  randArea:{
    marginTop: '20%',
    width: '30%',
    height: '10%',
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
  }
});
