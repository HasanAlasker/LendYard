import React from 'react';
import { StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import ScrollScreen from '../../components/ScrollScreen';
import Navbar from '../../components/Navbar';
import DropBox from '../../components/DropBox';
import AddImageBtn from '../../components/AddImageBtn';
import FormBtn from '../../components/FormBtn';
import {areas, categories, items, cities, condition, getAreasByCity, getItemsByCategory } from '../../constants/DropOptions'

function Post(props) {
  return (
    <SafeScreen>
      <ScrollScreen>
        {/* <BackContainer><BackBtn></BackBtn></BackContainer> */}
        <AddImageBtn></AddImageBtn>
        <DropBox placeholder={"Category"} items={categories}></DropBox>
        <DropBox placeholder={"Item"} items={items}></DropBox>
        <DropBox placeholder={"City"} items={cities}></DropBox>
        <DropBox placeholder={"Area"} items={areas}></DropBox>
        <DropBox placeholder={"Condition"} items={condition}></DropBox>
        <FormBtn title={"Post"}></FormBtn>
      </ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Post;