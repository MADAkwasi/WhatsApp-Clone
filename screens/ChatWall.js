import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ChatWall({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
    });
  }, [navigation]);

  return <Text>Chat Wall</Text>;
}

export default ChatWall;
