import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function NotificationBtn({onPress}) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name="bell" size={27} color={theme.always_white}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) => StyleSheet.create({
  container: {
    backgroundColor:theme.purple,
    padding:10,
    width:48,
    height:48,
    borderRadius:"50%",
    justifyContent:'center',
    alignItems:'center'
  },
});

export default NotificationBtn;
