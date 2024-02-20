import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (

    
    <View style={styles.container}>
      

      <Text style={styles.box}>NTUEDTD</Text>
      <Image source={require('./assets/favicon.png')} style={styles.icon}/>
     
      <Text  style={styles.font}>數位三甲 111019045 文奕婕</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'yellow',
    
  },
  icon:{
    width: 80, 
    height: 80,
    marginTop:40,
    marginLeft:170,
  },
   
  font:{
    color:'#000',
    fontSize:20,
    textAlign:'center',
    margin:20,
    justifyContent:'center',
    fontWeight:'bold',
    fontFamily:'monospace',
    
  },

  box:{
    color:'white',
    shadowColor:'black',
    
    textAlign:'center',
    margin:0,
    padding:20,
    fontSize:18,
    backgroundColor: 'gray',

  },
});
