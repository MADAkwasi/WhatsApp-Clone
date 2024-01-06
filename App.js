import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Community from "./screens/Community";
import Chats from "./screens/Chats";
import Updates from "./screens/Updates";
import Calls from "./screens/Calls";
import { Colors } from "./constants/Colors";
import StackScreen from "./navigators/Stack";

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
        <Tab.Screen
          name="Community"
          component={Community}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                size={24}
                color={color}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen name="Chats" component={StackScreen} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
