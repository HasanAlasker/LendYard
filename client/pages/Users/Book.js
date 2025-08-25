import { useState } from "react";
import { View, StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import Navbar from "../../components/Navbar";
import TopNav from "../../components/TopNav";
import ScrollScreen from "../../components/ScrollScreen";
import Post from "../../components/Post";


function Book(props) {
  const [activeTab, setActiveTab] = useState("Given");

  const renderContent = () => {
    switch (activeTab) {
      case "Given":
        return (
          <>
            <Post
              name={"Adam Ishak"}
              date={"12/ 1/ 2026"}
              profilePic={require('../../assets/Pics/u1.png')}
              // image={require("../../assets/Pics/image.png")}
              itemName={"Electric saw"}
              itemCat={"Tools"}
              status={"late"}
              time={"2 Days"}
              isMine={true}
              onPressBtn={""}
              isDisabled={false}
            ></Post>
            <Post
              name={"Momtaz Hamdan"}
              date={"12/ 1/ 2026"}
              profilePic={require('../../assets/Pics/u2.png')}
              // image={require("../../assets/Pics/tv.png")}
              itemName={"Television"}
              itemCat={"Electronics"}
              status={"early"}
              time={"1 Weak"}
              isMine={true}
              onPressBtn={""}
              isDisabled={false}
            ></Post>
          </>
        );

      case "Taken":
        return (
          <>
            <Post
              name={"Fadi Hajarat"}
              date={"12/ 1/ 2026"}
              profilePic={require('../../assets/Pics/u2.png')}
              image={require("../../assets/Pics/lm.png")}
              itemName={"Electric saw"}
              itemCat={"Tools"}
              area={"Dabouq"}
              status={"late"}
              rating={"4.1"}
              condition={"Needs repair"}
              title={"Request"}
              time={"1 hour"}
              onPressBtn={""}
              isMine={false}
              iBorrowed={true}
              isDisabled={false}
            ></Post>
          </>
        );
      default:
      // return <GivenContent />;
    }
  };

  return (
    <SafeScreen>
      <TopNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ScrollScreen>{renderContent()}</ScrollScreen>
      <Navbar />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Book;
