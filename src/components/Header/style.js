import React from "react";
import { StyleSheet, Text, View } from "react-native";

    const style = StyleSheet.create({
        headerStyle: {
          backgroundColor: "#272727",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          shadowColor: "#fff",
          shadowOffset: { width: 10, height: 2 },
          shadowOpacity: 1,
          // Android Only
          elevation: 4
        },
        textStyle: {
          color:'white',
          fontWeight:'bold',
          fontSize: 20
        },
      });



export default style;


