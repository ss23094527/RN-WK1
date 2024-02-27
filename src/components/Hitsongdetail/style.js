import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const style = StyleSheet.create({
  thumbnailContainerStyle: {
    alignItems: "stretch",
    height: "null",
    width: "97%",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
   
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    
    
    justifyContent: "space-around",
    paddingLeft: 0
  },
  cardContainerStyle: {
    
    flexDirection:"row",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  cardSectionStyle: {
    
    padding: 5,
    backgroundColor: "#3C3C3C",
    borderColor: "#000",
    borderBottomWidth: 1
  },
  imageStyle: {
    height:50,

    width: null,
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

  Title:{
    
fontSize:40,
fontFamily:'Raleway_200ExtraLight',
fontWeight:'bold',

  }
});

export default style;