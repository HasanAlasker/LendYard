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
import Post from "../../components/Post";
import ScrollScreen from "../../components/ScrollScreen";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  return (
    <SafeScreen>
      <SearchBar></SearchBar>
      <ScrollScreen>
        <Post
          profilePic={require('../../assets/Pics/hasan.png')}
          name={"Hasan Alasker"}
          date={"12/ 1/ 2026"}
          image={require('../../assets/Pics/lm.png')}
          itemName={"Lawn mower"}
          itemCat={'Garden'}
          area={"Jabal al kursi"}
          status={"taken"}
          rating={4.9}
          condition={"Slightly used"}
          title={"Request"}
          time={""}
          onPressBtn={''}
          onPressThree={''}
        ></Post>
        <Post
          name={"Yazan Nabas"}
          date={"12/ 1/ 2026"}
          image={require('../../assets/Pics/image.png')}
          itemName={"Electric saw"}
          itemCat={'Tools'}
          area={"Al madinah al munawara Street"}
          status={"available"}
          rating={2.5}
          condition={"Heavily used"}
          title={"Request"}
          time={""}
          onPressBtn={''}
          onPressThree={''}
        ></Post>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      
    },
  });

export default Have;
