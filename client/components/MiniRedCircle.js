import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";


function MiniRedCircle() {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return <View style={styles.container}></View>;
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.red,
      width: 14,
      height: 14,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: theme.background,
      borderWidth: 2,

      bottom:45,
      left:25
    },
  });

export default MiniRedCircle;
