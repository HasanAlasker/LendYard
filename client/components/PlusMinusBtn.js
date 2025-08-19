import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function PlusMinusBtn({ icon, onPress }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name={icon} size={27} color={theme.purple}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.post,
      padding: 8,
      width: 48,
      height: 48,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: theme.purple,
      borderWidth: 2,
    },
  });

export default PlusMinusBtn;
