import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./navigators/TapBar";
import ChatWall from "./screens/ChatWall";
import { Colors } from "./constants/Colors";
import Overview from "./screens/Overview";
import CommunityChat from "./screens/CommuntiyChat";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import CommunityInfo from "./screens/CommunityInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
          <Stack.Screen name="Community Info" component={CommunityInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
