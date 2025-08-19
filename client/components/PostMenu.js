import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal } from "react-native";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import Constants from "expo-constants";

import BackContainer from "../components/BackContainer";
import MenuBackBtn from "./MenuBackBtn";
import MenuOption from "./MenuOption";
import SeparatorComp from "./SeparatorComp";

function PostMenu({ isVisible, onClose, isMine }) {
  const styles = useThemedStyles(getStyles);
  const { toggleTheme } = useTheme();

  if (!isVisible) return null;
  return (
    <Modal transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.container}>
        <BackContainer>
          <MenuBackBtn onClose={onClose} />
          <MenuOption text={"Share post"} icon={"share"} />
          <SeparatorComp style={styles.sep} />
          {isMine && <MenuOption text={"Edit post"} icon={"pencil"} />}
          {isMine && <SeparatorComp style={styles.sep} />}
          {isMine ? <MenuOption text={"Delete post"} icon={"delete"} color={"red"} />: <MenuOption text={"Report post"} icon={"bullhorn-variant"} color={"red"} />}
        </BackContainer>
      </View>
    </Modal>
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
      paddingBottom: 20,
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

export default PostMenu;
