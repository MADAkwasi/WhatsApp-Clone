import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

function ChatRow({
  title = "Announcements",
  time,
  message,
  sender,
  image,
  index,
}) {
  if (index && index > 1) return;

  return (
    <View>
      <View style={styles.items}>
        {title === "Announcements" ? (
          <View style={styles.icon}>
            <Ionicons name="megaphone" size={27} color={Colors.secondary} />
          </View>
        ) : (
          <Image source={{ uri: image }} style={styles.img} />
        )}
        <View style={styles.col}>
          <View style={styles.rowTop}>
            <Text style={styles.txt}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {sender}: {message}
          </Text>
        </View>
      </View>
      <View>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </View>
  );
}

export default ChatRow;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#b8e6c0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 12,
  },
  items: {
    // flex: 1,
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 15,
    marginVertical: 15,
  },
  txt: {
    fontSize: 17,
  },
  rowTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  col: {
    gap: 3,
    width: "80%",
  },
  time: {
    fontSize: 12,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
