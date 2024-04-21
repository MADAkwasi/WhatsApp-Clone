import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function ChatRow({
  title = "Announcements",
  time,
  message,
  sender,
  image,
  index,
  onPress,
}) {
  if (index && index > 1) return;

  return (
    <Pressable onPress={onPress} android_ripple={{ color: "#ddd" }}>
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

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={
                sender
                  ? { fontFamily: "OpenSans" }
                  : { fontFamily: "OpenSans", color: "#737373" }
              }
            >
              {sender ? `${sender}: ${message}` : `Request to join`}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
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
    fontFamily: "OpenSans",
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
    fontFamily: "OpenSans",
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
