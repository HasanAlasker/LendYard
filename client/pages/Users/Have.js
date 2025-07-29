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
import TopOfPost from "../../components/TopOfPost";
import ItmeImage from "../../components/ItmeImage";
import ItemNameAndCat from "../../components/ItemNameAndCat";
import Location from "../../components/Location";
import ItemStatus from "../../components/ItemStatus";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  return (
    <SafeScreen>
      <SearchBar></SearchBar>
      <View style={styles.container}>
        <PostComponent>
          <TopOfPost name={"Hasan Alasker"} date={"14 /12 /2025"}></TopOfPost>
          <ItmeImage></ItmeImage>
          <ItemNameAndCat itemName={"Outdoor Table"} itemCat={"Events"}></ItemNameAndCat>
          <Location location={'Al-bayader'}></Location>
          <ItemStatus status={'available'} time={'2 Days'}></ItemStatus>
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
    
  });

export default Have;
