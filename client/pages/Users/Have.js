import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
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
import LableContainer from "../../components/LableContainer";
import ItemRating from "../../components/ItemRating";
import ItemCondition from "../../components/ItemCondition";
import RowLableCont from "../../components/RowLableCont";
import PrimaryBtn from "../../components/PrimaryBtn";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  return (
    <SafeScreen>
      <SearchBar></SearchBar>
      <ScrollView style={styles.container}>
        <PostComponent>
          <TopOfPost name={"Hasan Alasker"} date={"14 /12 /2025"}></TopOfPost>
          <ItmeImage></ItmeImage>
          <ItemNameAndCat
            itemName={"Outdoor Table"}
            itemCat={"Events"}
          ></ItemNameAndCat>
          <LableContainer>
            <Location location={"Al-bayader"}></Location>
            <ItemStatus status={"available"} time={"2 Days"}></ItemStatus>
            <RowLableCont>
              <ItemRating rating={5}></ItemRating>
              <ItemCondition condition={"Brand new"}></ItemCondition>
            </RowLableCont>
            <PrimaryBtn title={'Request'}></PrimaryBtn>
          </LableContainer>
        </PostComponent>
      </ScrollView>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom:100
    },
  });

export default Have;
