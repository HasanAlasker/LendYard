import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import Navbar from "../../components/Navbar";
import ScrollScreen from "../../components/ScrollScreen";
import TopChunkProfile from "../../components/TopChunkProfile";
import Post from "../../components/Post";
import SettingsMenu from "../../components/SettingsMenu";
import { useState } from "react";

function Profile({userName, isNotification, myProfile, userPic, userRate, sep}) {
  const [isMenu, setIsMenu]= useState(false)

  return (
    <SafeScreen>
      <SettingsMenu isVisible={isMenu} onClose={()=>{setIsMenu(false)}}></SettingsMenu>
      <ScrollScreen>
        <TopChunkProfile
          isNotification={true}
          myProfile={true}
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
        ></Post>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
