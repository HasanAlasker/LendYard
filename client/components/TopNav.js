import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import AppText from "../config/AppText";
import { useNavigation, useRoute } from "@react-navigation/native";

function TopNav(props) {
  const styles = useThemedStyles(getStyles);
  const navigate = useNavigation();
  const route = useRoute();

  const navigateAndMakeActive = () =>{
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={navigateAndMakeActive}>
          <AppText style={styles.text}>
            {route.name === "Book" ? "Given" : "Sent"}
          </AppText>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity onPress={navigateAndMakeActive}>
          <AppText style={styles.text}>
            {route.name === "Book" ? "Taken" : "Got"}
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      paddingTop: 20,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      zIndex: 100,
      paddingBottom: 25,
      backgroundColor: theme.backgroundColor,
    },
    row: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    text: {
      fontSize: 20,
      color: theme.sec_text,
      
    },
    line: {
      backgroundColor: theme.sec_text,
      height: 25,
      width: 2,
    },
  });

export default TopNav;
