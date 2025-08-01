import React from "react";
import { View, StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import TopChunkProfile from "../../components/TopChunkProfile";

function EditProfile({ userName, image, number, email, rating, sep }) {
  return (
    <SafeScreen>
      <TopChunkProfile
        userName={"Hasan Alasker"}
        userPic={require("../../assets/Pics/hasan.png")}
        userRate={5}
        sep={"Edit Info"}
      ></TopChunkProfile>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default EditProfile;
