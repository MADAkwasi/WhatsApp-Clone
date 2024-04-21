import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function ViewMore({ onPress }) {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: "#ddd" }}>
      <View style={styles.row}>
        <AntDesign name="right" size={22} color="#737373" />
        <Text style={styles.txt}>View all</Text>
      </View>
    </Pressable>
  );
}

export default ViewMore;

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    paddingBottom: 18,
    marginTop: 15,
  },
  txt: {
    fontSize: 17,
    color: "#737373",
    fontFamily: "OpenSans",
  },
});
