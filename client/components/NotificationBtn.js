import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import RedCircle from "./RedCircle";
import { useNavigation } from "@react-navigation/native";

function NotificationBtn({ onPress, isActive }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  const navigation = useNavigation()
  const navigateTo=()=>{
    navigation.navigate('Requests')
  }

  return (
    <View>
      <TouchableOpacity onPress={navigateTo} style={styles.container}>
        <Feather name="bell" size={27} color={theme.always_white}></Feather>
      </TouchableOpacity>
      {isActive && <RedCircle></RedCircle>}
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.purple,
      padding: 10,
      width: 48,
      height: 48,
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default NotificationBtn;
