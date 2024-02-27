import React from "react";
import { ScrollView } from "react-native";
import Hitsongdetail from "../Hitsongdetail";
import hitsong from "../../../json/hitsong.json";
import styles from "./style";
import { StyleSheet, View, Text, Image } from "react-native";

const HitSongs = () => {
  return (
    <>

<View style={styles.headerStyle}>
    <Text style={styles.Title}>  熱門歌曲</Text>
</View>
    <ScrollView>
           
    <Hitsongdetail album = {hitsong[0]} />
      <Hitsongdetail album = {hitsong[1]} />
      <Hitsongdetail album = {hitsong[2]} />
      <Hitsongdetail album = {hitsong[3]} />
     
      
      </ScrollView>
    </>
  );
};


export default HitSongs;