import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "../config/AppText";
import useThemedStyles from "../hooks/useThemedStyles";
import EditBtn from "./EditBtn";

function BigPicAndUsername({ userName, userPic, isEdit, isPicDisabled=true, onPress }) {
  const styles = useThemedStyles(getStyles);
  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={isPicDisabled} onPress={onPress} style={styles.imagePlaceholder}>
        <Image style={styles.image} source={userPic}></Image>
        {isEdit && <EditBtn></EditBtn>}
      </TouchableOpacity>
      <AppText style={styles.text}>{userName}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        gap:8,
        marginTop:40
    },
    imagePlaceholder: {
      width: 150,
      height: 150,
      backgroundColor: theme.sec_text,
      borderRadius: "50%",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
      resizeMode: "cover",
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center'
    }
  });

export default BigPicAndUsername;
