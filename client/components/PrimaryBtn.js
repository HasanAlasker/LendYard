import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../config/AppText';
import useThemedStyles from '../hooks/useThemedStyles';
import { useTheme } from "../config/ThemeContext";

function PrimaryBtn({title, onPress, isDisabled}) {
  const { theme } = useTheme();
  const styles = useThemedStyles(getStyles)

  const disableButton = ()=>{
    if(isDisabled===true) return theme.ghost
    else return theme.purple
  }
  return (
    <TouchableOpacity disabled={isDisabled} style={[styles.container, {backgroundColor: disableButton()}]}>
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
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold',
    alignSelf:'center'
  }
})

export default PrimaryBtn;