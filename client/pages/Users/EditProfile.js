import React from "react";
import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import TopChunkProfile from "../../components/TopChunkProfile";
import InputBox from "../../components/InputBox";
import FormBtn from "../../components/FormBtn";

function EditProfile({ userName, image, number, email, rating, sep }) {
  return (
    <SafeScreen>
      <TopChunkProfile
        userName={"Hasan Alasker"}
        userPic={require("../../assets/Pics/hasan.png")}
        userRate={5}
        isPicDisabled={false}
        onPressPic={()=>{console.log('hello hasan')}}
        sep={"Edit Info"}
      ></TopChunkProfile>
      <InputBox placeholder={'Name'} penOn={true}></InputBox>
      <InputBox placeholder={'Phone'} penOn={true}></InputBox>
      <InputBox placeholder={'Email'} penOn={true}></InputBox>
      <FormBtn title={"Save"}></FormBtn>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default EditProfile;
