import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Communities from "../screens/Communities";
import Chats from "../screens/Chats";
import Updates from "../screens/Updates";
import Calls from "../screens/Calls";
import { Colors } from "../constants/Colors";

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.secondary,
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
        component={Communities}
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
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}

export default TabBar;
