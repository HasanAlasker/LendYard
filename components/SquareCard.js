import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";

import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";

function SquareCard({ icon, name, cardnum }) {
  const { theme } = useTheme();

  const styles = useThemedStyles(getStyles);

  const getBackgroundColor = () => {
    if (cardnum === 1) {
      return theme.card1;
    } else if (cardnum === 2) {
      return theme.card2;
    } else if (cardnum === 3) {
      return theme.card3;
    } else if (cardnum === 4) {
      return theme.card4;
    } else if (cardnum === 5) {
      return theme.card5;
    } else if (cardnum === 6) {
      return theme.card6;
    } else if (cardnum === 7) {
      return theme.card7;
    } else if (cardnum === 8) {
      return theme.card8;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <MaterialCommunityIcons
        name={icon}
        size={115}
        color={theme.always_white}
      ></MaterialCommunityIcons>
      <AppText style={[styles.text]}>{name}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "47%",
      borderRadius: 24,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 15,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    text: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.always_white,
    },
  });

export default SquareCard;
