import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useThemedStyles from "../hooks/useThemedStyles";
import { useTheme } from "../config/ThemeContext";
import AppText from "../config/AppText";
import BackContainer from "../components/BackContainer";
import MenuBackBtn from "../components/MenuBackBtn";
import MenuOption from "../components/MenuOption";
import SeparatorComp from "../components/SeparatorComp";

function DropBox({ placeholder, penOn, items, onSelectItem, selectedItem }) {
  const styles = useThemedStyles(getStyles);
  const { theme } = useTheme();

  const [modal, setModal] = useState(false);


  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
        style={styles.container}
      >
        <View style={styles.left}>
          {penOn && (
            <Feather name="edit-3" size={24} color={theme.purple}></Feather>
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
        </View>
        <Feather name="chevron-down" size={26} color={theme.purple}></Feather>
      </TouchableOpacity>

      <Modal visible={modal} animationType="slide" transparent>
        <View style={styles.modalContent}>
          <BackContainer>
            <MenuBackBtn
              onClose={() => {
                setModal(false);
              }}
            ></MenuBackBtn>
          </BackContainer>

          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <MenuOption
                text={item.label}
                onPress={() => {
                  setModal(false);
                  onSelectItem(item);
                }}
              ></MenuOption>
            )}
            ItemSeparatorComponent={()=> <SeparatorComp style={styles.sep}></SeparatorComp>}
            contentContainerStyle={styles.list}
          ></FlatList>
        </View>
      </Modal>
    </>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      borderRadius: 18,
      borderColor: theme.purple,
      borderWidth: 2,
      justifyContent: "space-between",
      backgroundColor: theme.post,
      paddingVertical: 5,
      paddingHorizontal: 15,
      width: "90%",
      marginHorizontal: "auto",
      marginTop: 20,
    },
    text: {
      color: theme.purple,
      fontWeight: "bold",
      fontSize: 16,
      textAlignVertical: "center",
    },
    left: {
      flexDirection: "row",
      gap: 10,
    },
    modalContent: {
      backgroundColor: theme.post,
      borderRadius: 20,
      flex: 1,
    },
    list:{
      width:'90%',
      marginHorizontal:'auto'
    },
    sep:{
      width:'100%',
      marginTop:5,
      marginBottom:5,
    }
  });

export default DropBox;
