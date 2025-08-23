import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { ThemeProvider, useTheme } from "./config/ThemeContext";
import { PostProvider } from './config/PostContext'
import Home from "./pages/Users/Home";
import Have from "./pages/Users/Have";
import Post from "./pages/Users/Post";
import Book from "./pages/Users/Book";
import Profile from "./pages/Users/Profile";
import Requests from "./pages/Users/Requests";
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

const AppContent = () => {
  const { isDarkMode } = useTheme(); // I put it here because it needs to be inside
  // the theme provider to work other wise it will say "isDarkMode undefined"

  return (
    <>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <PostProvider>
          <AppContent />
        </PostProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
