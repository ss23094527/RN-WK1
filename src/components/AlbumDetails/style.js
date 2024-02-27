import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const style = StyleSheet.create({
  thumbnailContainerStyle: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    
   
   padding:8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2
  },
  cardSectionStyle: {
    marginTop: 5,
    padding: 5,
    backgroundColor: "#3C3C3C",
    borderColor: "#000",
    borderBottomWidth: 1
  },
  imageStyle: {
    height:380,
    width: null
  },
  bigwordstyle:
  {
        color:"white",
      fontSize:18,
      fontWeight:'bold',
  },
  smallwordstyle:{

    color:"white",
      fontSize:15,
      
  },

 
});

export default style;