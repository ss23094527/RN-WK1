import React from "react";
import { View } from "react-native";
import Bookslist from "../component/Bookslist";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <Bookslist 
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;