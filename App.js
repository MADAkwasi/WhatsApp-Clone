import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./navigators/TapBar";
import ChatWall from "./screens/ChatWall";
import HeaderLeft from "./components/HeaderLeft";
import { Colors } from "./constants/Colors";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.background,
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
