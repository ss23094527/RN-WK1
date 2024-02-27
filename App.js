import React from "react";
import { StyleSheet,StatusBar, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import HitSongs from "./src/components/HitSongs";



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <HitSongs />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Cochin',
  
    color: '5588ff',
    flex: 1,
    backgroundColor:'#000',
    
  },
});

export default App;