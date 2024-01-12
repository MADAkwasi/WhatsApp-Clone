import { StyleSheet, View } from "react-native";
import Item from "./Item";
import { Colors } from "../constants/Colors";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Action() {
  return (
    <View style={styles.container}>
      <Item des="Mute Notifications" btn={true}>
        <Octicons name="bell-fill" size={20} color="#737373" />
      </Item>
      <Item des="Custom Notification">
        <MaterialCommunityIcons name="music-note" size={20} color="#737373" />
      </Item>
      <Item des="Media Visibility">
        <MaterialIcons name="image" size={20} color="#737373" />
      </Item>
    </View>
  );
}

export default Action;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    paddingVertical: 15,
    gap: 5,
  },
});
