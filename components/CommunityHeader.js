import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function CommunityHeader() {
  return (
    <View style={styles.row}>
      <View style={styles.icons}>
        <View style={styles.groups}>
          <MaterialCommunityIcons
            name="account-group"
            size={38}
            color="white"
          />
          <View style={styles.plus}>
            <Entypo name="plus" size={16} color="white" />
          </View>
        </View>
      </View>
      <Text style={styles.txt}>New Community</Text>
    </View>
  );
}

export default CommunityHeader;

const styles = StyleSheet.create({
  icons: {
    position: "relative",
  },
  groups: {
    backgroundColor: "#d9d9d9",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: "blue",
  },
  plus: {
    backgroundColor: Colors.secondary,
    position: "absolute",
    bottom: -3,
    right: -2,
    height: 22,
    width: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1.4,
  },
  txt: {
    fontSize: 18,
  },
});
