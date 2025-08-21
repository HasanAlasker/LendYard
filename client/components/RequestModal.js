import { useState } from "react";
import { View, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import AppText from "../config/AppText";
import PlusMinusBtn from "./PlusMinusBtn";
import RequestBtn from "./RequestBtn";

function RequestModal({ isVisibile, onClose }) {
  const styles = useThemedStyles(getStyles);

  const [duration, setDuration] = useState(0)
  const [baseUnit, setBaseUnit] = useState('') // Store base unit
  const [active, setActive] = useState(null)

  const increase = () => setDuration(prev => Math.min(prev + 1, 99))
  const decrease = () => setDuration(prev => Math.max(prev - 1, 1))

  const handleUnit = (units) => {
    setBaseUnit(units)
    setActive(units)
  }

  // Compute the display unit on each render
  const displayUnit = baseUnit ? (duration === 1 ? baseUnit.slice(0, -1) : baseUnit) : ''

  return (
    <Modal transparent={true} visible={isVisibile}>
      <View style={styles.container}>
        <AppText style={styles.text}>Duration</AppText>
        <View style={styles.addMinus}>
            <PlusMinusBtn icon={'minus'} onPress={decrease}></PlusMinusBtn>
            <AppText style={styles.number}>{duration}</AppText>
            <PlusMinusBtn icon={'plus'} onPress={increase}></PlusMinusBtn>
        </View>
        <AppText style={styles.text}>Time unit</AppText>
        <View style={styles.buttons}>
            <View style={styles.buttons}>
                <RequestBtn title={'Hours'} isActive={active === 'hours'} onPress={()=> handleUnit('hours')} ></RequestBtn>
                <RequestBtn title={'Days'} isActive={active === 'days'} onPress={()=> handleUnit('days')} ></RequestBtn>
                <RequestBtn title={'Weeks'} isActive={active === 'weeks'} onPress={()=> handleUnit('weeks')} ></RequestBtn>
                <RequestBtn title={'Months'} isActive={active === 'months'} onPress={()=> handleUnit('months')} ></RequestBtn>
            </View>
        </View>
        {duration > 0 && displayUnit != "" && <View style={styles.display}>
            <AppText style={styles.faded}>Requesting for:</AppText>
            <AppText style={styles.text}>{duration} {displayUnit}</AppText>
        </View>}
        {duration > 0 && displayUnit != "" && <View style={styles.buttons}>
            <View style={styles.buttons}>
                <RequestBtn title={'Request'} isGreen={true}></RequestBtn>
                <RequestBtn title={'Cancel'} isRed={true} onPress={onClose}></RequestBtn>
            </View>
        </View>}
        {(duration === 0 || displayUnit === '') && <RequestBtn style={styles.fullBtn} title={'Cancel'} isRed={true} onPress={onClose}></RequestBtn>}
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}></View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "90%",
      margin: "auto",
      maxHeight: "80%",
      backgroundColor: theme.post,
      zIndex: 250,
      borderRadius: 15,
      paddingHorizontal:20,
      paddingVertical:25,

      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: theme.background,
      opacity: 0.5,
    },
    text:{
        fontSize:20,
        color:theme.main_text
    },
    addMinus:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:25,
        marginBottom:10
    },
    number:{
        fontSize:85,
        color:theme.purple,
        fontWeight:'bold',

    },
    buttons:{
        flexDirection:'row'
        ,flexWrap:'wrap',
        width:'100%',
        rowGap:20,
        justifyContent:'space-between',
        marginTop:10
    },
    display:{
        width:'100%',
        backgroundColor:theme.light_gray,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20,
        borderRadius:10,
        gap:10,
        marginTop:30,
        marginBottom:30
    }
    ,faded:{
        color:theme.darker_gray,
        fontSize:20,
    },
    fullBtn:{
        width:'100%',
        marginTop:40
    }
  });

export default RequestModal;
