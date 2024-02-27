import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./style";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>LE SSERAFIM 合輯</Text>
      </View>
  );
};



export default Header;