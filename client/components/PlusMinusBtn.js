import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function PlusMinusBtn({ icon, onPress, disabled, style }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, style]}>
      <Feather name={icon} size={27} color={theme.main_text}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.light_gray,
      padding: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: theme.light_gray,
      borderWidth: 2,
    },
  });

export default PlusMinusBtn;
