import React from 'react';
import { View, StyleSheet } from 'react-native';

function MyProfileContainer({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'90%',
    flexDirection:'row',
    marginHorizontal:'auto',
    justifyContent:'space-between',
    marginTop:15
  },
})

export default MyProfileContainer;