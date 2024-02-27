import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import styles from "./style";

const AlbumDetail = (props) => {



  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>



      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.bigwordstyle}>{title}</Text>
          <Text style={styles.smallwordstyle}>{artist}</Text>
        </View>
      </View>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
    </View>
  );
}



export default AlbumDetail;