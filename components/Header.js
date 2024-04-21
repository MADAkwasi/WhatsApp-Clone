import { Image, Text, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

function Header({ picture, firstName, contact }) {
  return (
    <View style={styles.headerCont}>
      <Image
        source={{ uri: picture }}
        style={styles.img}
        resizeMethod="scale"
      />
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.num}>{contact}</Text>
      <View style={styles.actions}>
        <View style={styles.icon}>
          <MaterialIcons name="call" size={30} color={Colors.secondary} />
          <Text style={styles.des}>Audio</Text>
        </View>
        <View style={styles.icon}>
          <FontAwesome5 name="video" size={30} color={Colors.secondary} />
          <Text style={styles.des}>Video</Text>
        </View>
        <View style={styles.icon}>
          <Fontisto name="search" size={30} color={Colors.secondary} />
          <Text style={styles.des}>Search</Text>
        </View>
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  headerCont: {
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    paddingTop: 7,
    marginTop: -3,
    elevation: 2,
    backgroundColor: Colors.background,
  },
  name: {
    fontSize: 25,
    fontFamily: "OpenSans",
  },
  num: {
    fontSize: 15,
    color: "#737373",
    fontFamily: "OpenSans",
  },
  actions: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 40,
  },
  icon: {
    gap: 12,
  },
  des: {
    color: Colors.secondary,
    fontWeight: "500",
    fontFamily: "OpenSans",
  },
});
