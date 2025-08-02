import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function DropBox({ placeholder, penOn }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        {penOn && <Feather name="edit-3" size={24} color={theme.purple}></Feather>}
        <AppText style={styles.text}>{placeholder}</AppText>
      </View>
      <Feather name="chevron-down" size={26} color={theme.purple}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      justifyContent: "space-between",
      backgroundColor: theme.post,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop:20
    },
    text: {
      color: theme.purple,
      fontWeight: "bold",
      fontSize: 20,
    },
    left:{
        flexDirection:'row',
        gap:10
    }
  });

export default DropBox;
