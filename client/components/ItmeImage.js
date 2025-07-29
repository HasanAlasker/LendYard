import React from "react";
import { View, StyleSheet } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";

function ItmeImage({source}) {
  const styles = useThemedStyles(getStyles);

  return <View style={styles.itemImage}></View>;
}

const getStyles = (theme) => StyleSheet.create({
  itemImage: {
      width: "100%",
      height: "280",
      backgroundColor: theme.sec_text,
      borderRadius: 15,
    },
});

export default ItmeImage;
