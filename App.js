import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    
    <View style={styles.container}>
      <Text style={styles.box}>NTUEDTD</Text>
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
  font:{
    color:'#000',
    fontSize:20,
    textAlign:'center',
    margin:50,
    justifyContent:'center',
    fontWeight:'bold',
    fontFamily:'monospace',
    
  },

  box:{
    color:'gray',
    shadowColor:'black',
    
    textAlign:'center',
    margin:0,
    padding:20,
    fontSize:18,
    backgroundColor: '#00000',

  },
});
