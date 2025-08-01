import React from 'react';
import { View, StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import AppText from '../../config/AppText';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import FullScreen from '../../components/FullScreen';

function Requests(props) {
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

export default Requests;