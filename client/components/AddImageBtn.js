import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../config/AppText";

function AddImageBtn(props) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons name="image-plus" color={theme.purple} size={130}></MaterialCommunityIcons>
      <AppText style={styles.text}>Add Image</AppText>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "90%",
      height: 270,
      backgroundColor: theme.post,
      marginHorizontal: "auto",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: theme.purple,
      marginBottom: 10,
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',
        color:theme.purple
    }
  });

export default AddImageBtn;
