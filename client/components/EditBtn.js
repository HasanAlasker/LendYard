import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import { Feather } from "@expo/vector-icons";

function EditBtn({ onPress }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name="edit-3" size={20} color={theme.always_white}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.purple,
      padding: 5,
      width: 40,
      height: 40,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: theme.background,
      borderWidth: 2,
    },
  });

export default EditBtn;
