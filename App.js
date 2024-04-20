import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./navigators/TapBar";
import ChatWall from "./screens/ChatWall";
import HeaderLeft from "./components/HeaderLeft";
import { Colors } from "./constants/Colors";
import { StatusBar } from "expo-status-bar";
import Overview from "./screens/Overview";
import CommunityChat from "./screens/CommuntiyChat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* <StatusBar /> */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.background,
            statusBarStyle: "auto",
            statusBarTranslucent: true,
            statusBarColor: Colors.secondary,
          }}
        >
          <Stack.Screen name="Tab" component={TabBar} />
          <Stack.Screen
            name="ChatWall"
            component={ChatWall}
            options={{
              headerShown: true,
              animation: "slide_from_right",
              animationTypeForReplace: "push",
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            options={{
              headerShown: true,
              headerTitle: "",
              animationTypeForReplace: "push",
              animation: "fade",
              headerTransparent: true,
              headerStyle: { backgroundColor: "transparent" },
              statusBarStyle: "dark",
              statusBarColor: "transparent",
              statusBarTranslucent: false,
            }}
          />
          <Stack.Screen
            name="CommunityChat"
            component={CommunityChat}
            options={{
              headerShown: true,
              animation: "slide_from_right",
              animationTypeForReplace: "push",
              headerBackVisible: true,
              tabBarStyle: { backgroundColor: "red" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
