import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function ItemPricing({price}) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>{price}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor:theme.red,
      paddingHorizontal:10,
      paddingVertical:5,
      borderRadius:20
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.always_white,
    },
  });

export default ItemPricing;