import React from 'react';
import { View, StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import FullScreen from '../../components/FullScreen';
import Navbar from '../../components/Navbar';
import TopNav from '../../components/TopNav';

function Book(props) {
  return (
    <SafeScreen>
      <TopNav></TopNav>
      <FullScreen></FullScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Book;