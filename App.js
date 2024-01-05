import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Community from "./screens/Community";
import Chats from "./screens/Chats";
import Updates from "./screens/Updates";
import Calls from "./screens/Calls";
import { Colors } from "./constants/Colors";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chats"
        backBehavior="initialRoute"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.primary,
            paddingTop: 50,
          },
          tabBarActiveTintColor: Colors.background,
          tabBarIndicatorStyle: {
            backgroundColor: Colors.background,
          },
        }}
      >
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
