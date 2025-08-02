import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function InputBox({ placeholder, penOn, icon, value }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {penOn && (
        <Feather name="edit-3" size={24} color={theme.purple}></Feather>
      )}
      {icon && <Feather name={icon} size={24} color={theme.purple}></Feather>}
      <TextInput style={styles.text} placeholder={placeholder} value={value} placeholderTextColor={theme.purple}></TextInput>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      backgroundColor: theme.post,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 20,
      gap: 10,
      minHeight: 40,
    },
    text: {
      color: theme.purple,
      fontWeight: "bold",
      fontSize: 20,
      flex:1,
      padding:0,
      margin:0,
      textAlignVertical:'center'
    },
  });

export default InputBox;
