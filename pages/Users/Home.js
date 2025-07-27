import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../../config/AppText'
import SearchBar from '../../components/SearchBar';

import useThemedStyles from "../../hooks/useThemedStyles";

function Home(props) {
  const styles = useThemedStyles(getStyles);

  return (
    <SafeAreaView style={styles.background}>
      <SearchBar></SearchBar>
    </SafeAreaView>
  );
}

const getStyles = (theme) => StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:theme.background
  },
})

export default Home;