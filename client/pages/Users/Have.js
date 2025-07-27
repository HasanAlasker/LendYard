import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import FullScreen from '../../components/FullScreen';


function Have(props) {
  return (
    <SafeAreaView style={styles.container}>
        <SearchBar></SearchBar>
        <View style={styles.container}></View>
        <Navbar></Navbar>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})

export default Have;