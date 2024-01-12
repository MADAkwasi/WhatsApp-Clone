import { StyleSheet, View } from "react-native";
import Item from "./Item";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function DangerActions({ firstName }) {
  return (
    <View style={styles.container}>
      <Item des={`Block ${firstName}`} style={{ color: "#f70a0a" }}>
        <Entypo name="block" size={24} color="#f70a0a" />
      </Item>
      <Item des={`Report ${firstName}`} style={{ color: "#f70a0a" }}>
        <Entypo name="thumbs-down" size={24} color="#f70a0a" />
      </Item>
    </View>
  );
}

export default DangerActions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    paddingVertical: 15,
    gap: 5,
    marginBottom: 40,
  },
});
