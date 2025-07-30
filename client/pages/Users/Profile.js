import React from "react";
import { View, StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import FullScreen from "../../components/FullScreen";
import Navbar from "../../components/Navbar";
import SeparatorComp from "../../components/SeparatorComp";
import Post from "../../components/Post";
import ScrollScreen from "../../components/ScrollScreen";
import NotificationBtn from "../../components/NotificationBtn";
import SettingsBtn from "../../components/SettingsBtn";
import EditBtn from "../../components/EditBtn";
import UserRate from "../../components/UserRate";
import RedCircle from "../../components/RedCircle";
import BackBtn from "../../components/BackBtn";
import BlankBtn from "../../components/BlankBtn";

function Profile(props) {
  return (
    <SafeScreen>
      <ScrollScreen>
        <NotificationBtn></NotificationBtn>
        <RedCircle></RedCircle>
        <SettingsBtn></SettingsBtn>
        <EditBtn></EditBtn>
        <BackBtn></BackBtn>
        <BlankBtn></BlankBtn>
        <UserRate userRating={4.6}></UserRate>
        {/* <SeparatorComp>Posts</SeparatorComp> */}
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
