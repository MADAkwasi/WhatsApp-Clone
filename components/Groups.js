import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Item from "./Item";

function Groups({ firstName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>No groups in common</Text>
      <Item des={`Create group with ${firstName}`}>
        <View style={styles.icon}>
          <MaterialIcons name="people-alt" size={22} color="white" />
        </View>
      </Item>
    </View>
  );
}

export default Groups;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    paddingVertical: 15,
    gap: 5,
  },
  icon: {
    height: 38,
    width: 38,
    borderRadius: 19,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#737373",
    paddingHorizontal: 12,
    fontSize: 15,
    fontFamily: "OpenSans",
  },
});
