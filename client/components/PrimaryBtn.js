import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../config/AppText';
import useThemedStyles from '../hooks/useThemedStyles';

function PrimaryBtn({title, onPress}) {
    const styles = useThemedStyles(getStyles)
  return (
    <TouchableOpacity style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const getStyles =(theme) => StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:theme.purple,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    paddingTop:4,
    paddingBottom:7
    ,alignItems:'center',
    marginTop:20
  },
  text:{
    color:theme.always_white,
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'center'
  }
})

export default PrimaryBtn;