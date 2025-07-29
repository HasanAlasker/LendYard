import { Octicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function Location({ area }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Octicons name="location" size={20} color={theme.purple}></Octicons>
      <AppText style={styles.text}>{area}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.purple,
    },
  });

export default Location;
