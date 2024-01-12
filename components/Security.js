import { StyleSheet, View } from "react-native";
import Item from "./Item";
import { Colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Security() {
  return (
    <View style={styles.container}>
      <Item
        des="Encryption"
        details="Messages and calls are end-to-end encrypted. Tap to verify"
      >
        <MaterialIcons name="lock" size={23} color="#737373" />
      </Item>
      <Item des="Disappearing messages" details="Off">
        <MaterialCommunityIcons
          name="progress-clock"
          size={24}
          color="#737373"
        />
      </Item>
      <Item des="Chat lock">
        <MaterialCommunityIcons
          name="message-text-lock-outline"
          size={24}
          color="#737373"
        />
      </Item>
    </View>
  );
}

export default Security;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    paddingVertical: 15,
    gap: 5,
  },
});
