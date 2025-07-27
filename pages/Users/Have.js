import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';


function Have(props) {
  return (
    <SafeAreaView>
        <SearchBar></SearchBar>
        
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Have;