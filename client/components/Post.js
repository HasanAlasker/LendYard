import { StyleSheet } from "react-native";
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
import AcceptRejectBtn from "./AcceptRejectBtn";
import { useRoute } from "@react-navigation/native";
import PostMenu from "./PostMenu";
import { useState } from "react";

function Post({
  profilePic,
  name,
  date,
  image,
  itemName,
  itemCat,
  area,
  isMine,
  iBorrowed,
  iRequested,
  status,
  rating,
  time,
  condition,
  title,
  isDisabled,
}) {
  const styles = useThemedStyles(getStyles);
  const route = useRoute();

  const [isPostMenu, setIsPostMenu] = useState(false);
  const handelMenu = () => {
    setIsPostMenu(!isPostMenu);
  };

  return (
    <>
      <PostComponent style={styles.post}>
        <TopOfPost
          image={profilePic}
          name={name}
          date={date}
          onPressThree={handelMenu}
        ></TopOfPost>
        <ItmeImage source={image}></ItmeImage>
        <ItemNameAndCat itemName={itemName} itemCat={itemCat}></ItemNameAndCat>
        <LableContainer>
          {area && <Location area={area}></Location>}
          <ItemStatus status={status} time={time}></ItemStatus>
          <RowLableCont>
            {rating && <ItemRating rating={rating}></ItemRating>}
            {condition && <ItemCondition condition={condition}></ItemCondition>}
          </RowLableCont>
          {
            <PrimaryBtn
              title={title}
              isDisabled={isDisabled}
              status={status}
              isMine={isMine}
              iBorrowed={iBorrowed}
              iRequested={iRequested}
            ></PrimaryBtn>
          }
          {route.name === "Requests" && status === "requested" && (
            <AcceptRejectBtn></AcceptRejectBtn>
          )}
        </LableContainer>
      </PostComponent>

      <PostMenu
        isMine={isMine}
        isVisible={isPostMenu}
        onClose={() => setIsPostMenu(false)}
      ></PostMenu>
    </>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    post: {
      marginVertical: 20,
      zIndex: 50,
    },
  });

export default Post;
