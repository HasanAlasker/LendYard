import { View, StyleSheet } from 'react-native';

function RowLableCont({children}) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:30
  },
})

export default RowLableCont;