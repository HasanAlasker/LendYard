import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import AppText from "../config/AppText";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";

function TopOfPost({ name, date, image ,onPressThree, onPressProfile}) {
  const styles = useThemedStyles(getStyles);
  return (
    <View style={styles.topPart}>
      <View style={styles.picAndNameAndDate}>
        <View style={styles.imageHolder}>
          <Image source={image} style={styles.pic}></Image>
        </View>
        <View style={styles.nameAndDate}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.date}>{date}</AppText>
        </View>
      </View>
      <TouchableOpacity onPress={onPressThree}>
        <Feather name="more-vertical" size={30} style={styles.more}></Feather>
      </TouchableOpacity>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    picAndNameAndDate: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    nameAndDate: {
      gap: 0,
    },
    imageHolder: {
      width: 40,
      aspectRatio: 1,
      backgroundColor: theme.sec_text,
      borderRadius:20,
      overflow:"hidden"
    },
    name: {
      fontSize: 17,
      fontWeight: "bold",
      color: theme.main_text,
    },
    date: {
      fontSize: 14,
      color: theme.sec_text,
      fontWeight:'600'
    },
    topPart: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    more:{
        left:10
    },
    pic:{
      width: '100%',
      height:40,
      resizeMode:'cover'
    }
  });

export default TopOfPost;
