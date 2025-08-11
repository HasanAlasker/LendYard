
import { StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function EditBtn({ onPress }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <TouchableOpacity onPress={navigateTo} style={styles.container}>
      <Feather name="edit-3" size={22} color={theme.always_white}></Feather>
    </TouchableOpacity>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.purple,
      padding: 5,
      width: 45,
      height: 45,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
      borderColor: theme.background,
      borderWidth: 2,

      bottom: 45,
      left: 105,
    },
  });

export default EditBtn;
