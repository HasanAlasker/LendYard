
import { View, StyleSheet} from "react-native";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import SafeScreen from "../../components/SafeScreen";
import useThemedStyles from "../../hooks/useThemedStyles";
import Post from "../../components/Post";
import ScrollScreen from "../../components/ScrollScreen";
import PostMenu from "../../components/PostMenu";
import { useState } from "react";

function Have(props) {
  const styles = useThemedStyles(getStyles);
  const [isPostMenu, setIsPostMenu]= useState(false)
  const handelMenu = () => {
    setIsPostMenu(!isPostMenu)
  }

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
          onPressThree={handelMenu}
          isDisabled={false}
        ></Post>
        <Post
          name={"Yazan Nabas"}
          date={"12/ 1/ 2026"}
          profilePic={require('../../assets/Pics/u1.png')}
          image={require('../../assets/Pics/image.png')}
          itemName={"Electric saw"}
          itemCat={'Tools'}
          area={"Al madinah al munawara Street"}
          status={"available"}
          rating={'Unrated'}
          condition={"Heavily used"}
          title={"Request"}
          time={""}
          onPressBtn={''}
          onPressThree={handelMenu}
          isDisabled={false}
        ></Post>
      </ScrollScreen>
      <PostMenu isVisible={isPostMenu} onClose={()=>{setIsPostMenu(false)}}></PostMenu>
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
