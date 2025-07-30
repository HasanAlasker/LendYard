import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

function ScrollScreen({children}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
        {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})

export default ScrollScreen;