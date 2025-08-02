import React from 'react';
import { View, StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import FullScreen from '../../components/FullScreen';
import Navbar from '../../components/Navbar';
import BackBtn from '../../components/BackBtn';
import DropBox from '../../components/DropBox';
import BackContainer from '../../components/BackContainer';
import AddImageBtn from '../../components/AddImageBtn';
import FormBtn from '../../components/FormBtn';

function Post(props) {
  return (
    <SafeScreen>
      <FullScreen>
        <BackContainer><BackBtn></BackBtn></BackContainer>
        <AddImageBtn></AddImageBtn>
        <DropBox placeholder={"Category"}></DropBox>
        <DropBox placeholder={"Item"}></DropBox>
        <DropBox placeholder={"City"}></DropBox>
        <DropBox placeholder={"Area"}></DropBox>
        <DropBox placeholder={"Condition"}></DropBox>
        <FormBtn title={"Post"}></FormBtn>
      </FullScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Post;