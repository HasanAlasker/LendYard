import React from 'react';
import { View, StyleSheet } from 'react-native';

function LableContainer({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    gap:10
  },
})

export default LableContainer;