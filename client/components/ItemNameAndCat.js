import React from "react";
import { View, StyleSheet } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import AppText from "../config/AppText";

function ItemNameAndCat({ itemName, itemCat }) {
  const styles = useThemedStyles(getStyles);
  return (
    <View style={styles.itemAndCatagory}>
      <AppText style={styles.itemName}>{itemName}</AppText>
      <AppText style={styles.itemCat}>{itemCat}</AppText>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    itemAndCatagory: {
      gap: 0,
    },
    itemName: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.main_text,
    },
    itemCat: {
      fontSize: 15,
      color: theme.sec_text,
      fontWeight: "bold",
    },
  });

export default ItemNameAndCat;
