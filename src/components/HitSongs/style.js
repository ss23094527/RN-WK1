import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


const style = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 10
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },

  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop:10
  },
  cardSectionStyle: {
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
    ,
    bigwordstyle:
    {
        marginTop:-30,
        fontSize:20,
        fontWeight:'bold',
    },
    headerStyle: {
        backgroundColor: "#000",
        borderWidth:5,
        borderColor:'#000',
        borderRadius:20,
        justifyContent: "center",
        alignItems: "left",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 4
      },
      textStyle: {
     
        color:'white',
        fontSize: 20
      },
      Title:{
        textShadowOffset:{width:4, height:2},
    textShadowColor:'gray',
    textShadowRadius:10,
    letterSpacing:2,
        fontFamily:'Georgia',
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        
          }
});


export default style;