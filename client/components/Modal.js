import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { ThemeContext } from "@react-navigation/native";
import { useTheme } from "../config/ThemeContext";
import Constants from "expo-constants";

import BackContainer from "../components/BackContainer";
import MenuBackBtn from "./MenuBackBtn";
import MenuOption from "./MenuOption";
import SeparatorComp from "./SeparatorComp";

function Modal({ isVisible, onClose, isMine }) {
  const styles = useThemedStyles(getStyles);
  const { toggleTheme } = useTheme();

  if (!isVisible) return null;
  return (
    <>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.container}>
        <BackContainer>
          <MenuBackBtn onClose={onClose} />
          
        </BackContainer>
      </View>
    </>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.post,
      position: "absolute",
      zIndex: 98,
      paddingBottom: 100,
      borderTopRightRadius: 22,
      borderTopLeftRadius: 22,
      paddingBottom: Constants.statusBarHeight+73,
      bottom: 0,
      paddingTop:5
    },
    sep: {
      width: "100%",
      marginTop: 5,
    },
    overlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: theme.background,
      zIndex: 90,
      opacity: 0.5,
    },
  });

export default Modal;
