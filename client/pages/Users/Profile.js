import React from "react";
import { View, StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import FullScreen from "../../components/FullScreen";
import Navbar from "../../components/Navbar";
import SeparatorComp from "../../components/SeparatorComp";
import Post from "../../components/Post";
import ScrollScreen from "../../components/ScrollScreen";

function Profile(props) {
  return (
    <SafeScreen>
      <ScrollScreen>
        <SeparatorComp>Posts</SeparatorComp>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Profile;
