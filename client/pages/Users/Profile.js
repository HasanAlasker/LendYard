import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import Navbar from "../../components/Navbar";
import ScrollScreen from "../../components/ScrollScreen";
import TopChunkProfile from "../../components/TopChunkProfile";
import Post from "../../components/Post";
import SettingsMenu from "../../components/SettingsMenu";
import { useState } from "react";
import PostMenu from "../../components/PostMenu";

function Profile({userName, isNotification, myProfile=true, userPic, userRate, sep}) {
  const [isMenu, setIsMenu]= useState(false)

  const [isPostMenu, setIsPostMenu]= useState(false)
  const handelPostMenu = () => {
    setIsPostMenu(!isPostMenu)
  }


  return (
    <SafeScreen>
      <SettingsMenu isVisible={isMenu} onClose={()=>{setIsMenu(false)}}></SettingsMenu>
      <ScrollScreen>
        <TopChunkProfile
          isNotification={true}
          myProfile={myProfile}
          userName={"Hasan Alasker"}
          userPic={require("../../assets/Pics/hasan.png")}
          userRate={"5"}
          sep={"Items"}
          settingsPress={()=>{setIsMenu(true)}}
        ></TopChunkProfile>
        <Post
          area={"Al Jandaweel"}
          condition={"Brand new"}
          date={"12/ 1/ 2024"}
          name={"Hasan Alasker"}
          profilePic={require("../../assets/Pics/hasan.png")}
          image={require('../../assets/Pics/tv.png')}
          itemName={"Television"}
          itemCat={"Electronics"}
          isMine={true}
          status={"requested"}
          rating={"4.3"}
          iBorrowed={false}
          iRequested={false}
          onPressThree={handelPostMenu}
        ></Post>
        <Post
          area={"Al Jandaweel"}
          condition={"Brand new"}
          date={"12/ 1/ 2024"}
          name={"Hasan Alasker"}
          profilePic={require("../../assets/Pics/hasan.png")}
          image={require('../../assets/Pics/tv.png')}
          itemName={"Television"}
          itemCat={"Electronics"}
          isMine={true}
          status={"taken"}
          rating={"4.3"}
          iBorrowed={false}
          iRequested={false}
          onPressThree={handelPostMenu}
        ></Post>
        <Post
          area={"Al Jandaweel"}
          condition={"Brand new"}
          date={"12/ 1/ 2024"}
          name={"Hasan Alasker"}
          profilePic={require("../../assets/Pics/hasan.png")}
          image={require('../../assets/Pics/tv.png')}
          itemName={"Television"}
          itemCat={"Electronics"}
          isMine={true}
          status={"available"}
          rating={"4.3"}
          iBorrowed={false}
          iRequested={false}
          onPressThree={handelPostMenu}
        ></Post>
        <Post
          area={"Al Jandaweel"}
          condition={"Brand new"}
          date={"12/ 1/ 2024"}
          name={"Hasan Alasker"}
          profilePic={require("../../assets/Pics/hasan.png")}
          image={require('../../assets/Pics/tv.png')}
          itemName={"Television"}
          itemCat={"Electronics"}
          isMine={true}
          status={"disabled"}
          rating={"4.3"}
          iBorrowed={false}
          iRequested={false}
          onPressThree={handelPostMenu}
        ></Post>
      </ScrollScreen>
      <PostMenu isVisible={isPostMenu} onClose={()=>{setIsPostMenu(false)}} isMine={myProfile}></PostMenu>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
