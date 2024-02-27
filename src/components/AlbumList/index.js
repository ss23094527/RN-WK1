import React from "react";
import { ScrollView } from "react-native";
import AlbumDetail from "../AlbumDetails";
import { StyleSheet, View, Text, Image } from "react-native";
import albumData from "../../../json/albums.json";
import styles from "./style";

const Albumlist = () => {
  return (
    <>
    <View style={styles.headerStyle}>
    <Text style={styles.Title}>  所有專輯</Text>
</View>
   
    <ScrollView>
   
    
      
    <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <AlbumDetail album = {albumData[4]} />
      
      </ScrollView>
    </>
  );
};


export default Albumlist;