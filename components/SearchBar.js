import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState("");
  const { theme } = useTheme();

  const styles = useThemedStyles(getStyles);

  return (
    <View style={styles.searchbar}>
      <View style={styles.bigBox}>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="search"
            size={24}
            color={theme.purple}
            style={styles.icon}
          />
          <TextInput
            onChangeText={(text) => setSearchItem(text)}
            placeholder={"Search Items"}
            placeholderTextColor={theme.purple}
            style={styles.input}
          />
        </View>
        <View style={styles.filter}>
          <MaterialIcons
            name="tune"
            size={22}
            color={theme.purple}
            
          ></MaterialIcons>
        </View>
      </View>
    </View>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    searchbar: {
      width: "100%",
      backgroundColor: theme.transp,
      paddingBottom:30,
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30,
      zIndex:100,
    },
    bigBox: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      margin: "auto",
      marginTop: 10,
    },
    inputContainer: {
      borderWidth: 2,
      borderRadius: 50,
      paddingHorizontal: 20,
      borderColor: theme.purple,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.post,
      width: "85%",
      paddingVertical: 0,
      height: 40,
    },
    icon: {
      
    },
    filter: {
      backgroundColor: theme.post,
      alignItems: "center",
      justifyContent: "center",
      aspectRatio: 1,
      borderRadius: "50%",
      borderWidth: 2,
      borderColor: theme.purple,
      height: 40,
    },
    input: {
      fontWeight: "bold",
      fontSize: 16,
      height: 40,
    },
  });

export default SearchBar;
