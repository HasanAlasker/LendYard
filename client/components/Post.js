import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TopOfPost from "./TopOfPost";
import ItmeImage from "./ItmeImage";
import ItemNameAndCat from "../components/ItemNameAndCat";
import Location from "../components/Location";
import ItemStatus from "../components/ItemStatus";
import LableContainer from "../components/LableContainer";
import ItemRating from "../components/ItemRating";
import ItemCondition from "../components/ItemCondition";
import RowLableCont from "../components/RowLableCont";
import PrimaryBtn from "../components/PrimaryBtn";
import PostComponent from "../components/PostComponent";
import useThemedStyles from "../hooks/useThemedStyles";

function Post({profilePic, name, date, image, itemName, itemCat, area, status, rating,time, condition, title, onPressBtn, onPressThree, isDisabled}) {
  const styles = useThemedStyles(getStyles);

  return (
    <PostComponent style={styles.post}>
      <TopOfPost image={profilePic} name={name} date={date} onPressThree={onPressThree}></TopOfPost>
      <ItmeImage source={image}></ItmeImage>
      <ItemNameAndCat
        itemName={itemName}
        itemCat={itemCat}
      ></ItemNameAndCat>
      <LableContainer>
        <Location area={area}></Location>
        <ItemStatus status={status} time={time}></ItemStatus>
        <RowLableCont>
          <ItemRating rating={rating}></ItemRating>
          <ItemCondition condition={condition}></ItemCondition>
        </RowLableCont>
        <PrimaryBtn title={title} onPress={onPressBtn} isDisabled={isDisabled}></PrimaryBtn>
      </LableContainer>
    </PostComponent>
  );
}

const getStyles = (theme) => StyleSheet.create({
  post: {
    marginVertical:20,
    zIndex:50
  },
});

export default Post;
