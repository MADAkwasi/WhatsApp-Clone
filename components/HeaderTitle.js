import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function HeaderTitle({ firstName, image }) {
  return (
    <View style={styles.cont}>
      <View style={styles.groupLeft}>
        <Image style={styles.img} source={{ uri: image }} />
        <Pressable style={styles.btn} android_ripple={{ color: "#ddd" }}>
          <Text style={styles.txt}>{firstName}</Text>
        </Pressable>
      </View>
      <View style={styles.groupRight}>
        <FontAwesome5 name="video" size={20} color="#FFFFFF" />
        <MaterialIcons name="call" size={20} color="#FFFFFF" />
        <Entypo name="dots-three-vertical" size={20} color="#FFFFFF" />
      </View>
    </View>
  );
}

export default HeaderTitle;

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "92%",
    alignItems: "center",
  },
  txt: {
    color: Colors.background,
    fontSize: 20,
    width: 150,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 5,
    marginLeft: -10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    // width: "70%",
  },
  groupRight: {
    flexDirection: "row",
    gap: 20,
  },
  groupLeft: {
    flexDirection: "row",
    marginLeft: -15,
  },
});
