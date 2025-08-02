import React from 'react';
import { View, StyleSheet } from 'react-native';

function BackContainer({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'90%',
    marginHorizontal:'auto',
    marginVertical:15
  },
})

export default BackContainer;