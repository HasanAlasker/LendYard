import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import { useNavigation } from "@react-navigation/native";

function BackBtn({ onPress }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={navigateTo} style={styles.container}>
      <Feather name="arrow-left" size={27} color={theme.purple}></Feather>
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

export default BackBtn;
