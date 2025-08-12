import { useState } from "react";
import { StyleSheet } from "react-native";
import SafeScreen from "../../components/SafeScreen";
import TopNav from "../../components/TopNav";
import Navbar from "../../components/Navbar";
import ScrollScreen from "../../components/ScrollScreen";

function Requests(props) {
  const [activeTab, setActiveTab] = useState("Sent");

  const renderContent = () => {
    switch (activeTab) {
      case "Sent":
        // return <SentContent />;
      case "Got":
        // return <GotContent />;
      default:
        // return <SentContent />;
    }
  };

  return (
    <SafeScreen>
      <TopNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ScrollScreen>{renderContent()}</ScrollScreen>
      <Navbar></Navbar>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Requests;