import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "../screens/Chats";
import ChatWall from "../screens/ChatWall";

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatsStack" component={Chats} />
      <Stack.Screen
        name="ChatWall"
        component={ChatWall}
        options={{
          headerShown: true,
          animation: "slide_from_right",
          animationTypeForReplace: "push",
          
        }}
      />
    </Stack.Navigator>
  );
}

export default StackScreen;
