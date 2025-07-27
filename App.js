import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "./config/ThemeContext";
import Home from "./pages/Users/Home";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false, animation: "none" }}
  >
    <Stack.Screen name="Home" component={Home}></Stack.Screen>
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
