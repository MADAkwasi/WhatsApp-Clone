import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

function MessageBubble({ text }) {
  const date = new Date();

  return (
    <View style={styles.cont}>
      <View style={styles.bubble}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.time}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
        <View style={{ alignSelf: "flex-end" }}>
          <Ionicons name="checkmark-done" size={15} color={Colors.seen} />
        </View>
      </View>
    </View>
  );
}

export default MessageBubble;

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: Colors.sentBubble,
    maxWidth: "50%",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "right",
    width: "fit-content",
    marginRight: 10,
    flexDirection: "row",
  },
  cont: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 2.7,
  },
  time: {
    fontSize: 12,
    alignSelf: "flex-end",
    marginLeft: 6,
    marginRight: 3,
    color: "#737373",
  },
  text: {
    fontSize: 15,
  },
});
