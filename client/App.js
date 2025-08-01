import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "./config/ThemeContext";
import Home from "./pages/Users/Home";
import Have from "./pages/Users/Have";
import Post from "./pages/Users/Post";
import Book from "./pages/Users/Book";
import Profile from "./pages/Users/Profile";
import Requests from './pages/Users/Requests'
import EditProfile from "./pages/Users/EditProfile";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, animation: "none" }}
  >
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
    <Stack.Screen name="Have" component={Have}></Stack.Screen>
    <Stack.Screen name="Post" component={Post}></Stack.Screen>
    <Stack.Screen name="Book" component={Book}></Stack.Screen>
    <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
    <Stack.Screen name="Requests" component={Requests}></Stack.Screen>
    <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StackNavigator></StackNavigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
