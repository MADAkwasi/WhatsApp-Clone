import { StyleSheet, View, Pressable, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

function AddGroup() {
  return (
    <View style={styles.cont}>
      <Pressable style={styles.press}>
        <View style={styles.btn}>
          <Entypo name="plus" size={24} color="white" />
          <Text style={styles.txt}>Add Group</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default AddGroup;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#369c48",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 9,
    borderRadius: 20,
    flexDirection: "row",
    gap: 2,
  },
  txt: {
    fontFamily: "OpenSans",
    textAlign: "center",
    color: "white",
  },
  cont: {
    backgroundColor: "#ddd",
  },
});
