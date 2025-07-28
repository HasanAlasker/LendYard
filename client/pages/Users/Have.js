import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import FullScreen from "../../components/FullScreen";
import SafeScreen from "../../components/SafeScreen";
import PostComponent from "../../components/PostComponent";
import useThemedStyles from "../../hooks/useThemedStyles";
import AppText from "../../config/AppText";
import { Feather } from "@expo/vector-icons";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  return (
    <SafeScreen>
      <SearchBar></SearchBar>
      <View style={styles.container}>
        <PostComponent>
          <View style={styles.topPart}>
            <View style={styles.picAndNameAndDate}>
              <View style={styles.imageHolder}></View>
              <View style={styles.nameAndDate}>
                <AppText style={styles.name}>Hasan Alasker</AppText>
                <AppText style={styles.date}>14/12/2025</AppText>
              </View>
            </View>
            <TouchableOpacity>
              <Feather name="more-vertical" size={30}></Feather>
            </TouchableOpacity>
          </View>
        </PostComponent>
      </View>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    picAndNameAndDate: {
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
    },
    imageHolder: {
      width: 45,
      aspectRatio: 1,
      backgroundColor: theme.sec_text,
      borderRadius: "50%",
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.main_text,
    },
    date: {
      fontSize: 16,
      color: theme.sec_text,
      fontWeight: "bold",
    },
    topPart: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

export default Have;
