import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import FullScreen from '../../components/FullScreen';
import SafeScreen from '../../components/SafeScreen';


function Have(props) {
  return (
    <SafeScreen>
        <SearchBar></SearchBar>
        <View style={styles.container}></View>
        <Navbar></Navbar>
    </SafeScreen>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})

export default Have;