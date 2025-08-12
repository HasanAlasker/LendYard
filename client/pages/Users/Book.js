import {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import FullScreen from '../../components/FullScreen';
import Navbar from '../../components/Navbar';
import TopNav from '../../components/TopNav';
import ScrollScreen from '../../components/ScrollScreen';

function Book(props) {
  const [activeTab, setActiveTab] = useState('Given');

  const renderContent = () => {
    switch(activeTab) {
      case 'Given':
        // return <GivenContent />;
      case 'Taken':
        // return <TakenContent />;
      default:
        // return <GivenContent />;
    }
  };

  return (
    <SafeScreen>
      <TopNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      <ScrollScreen>
        {renderContent()}
      </ScrollScreen>
      <Navbar />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container:{},
})

export default Book;