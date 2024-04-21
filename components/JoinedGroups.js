import { StyleSheet, Text, View } from "react-native";
import ChatRow from "./ChatRow";

function JoinedGroups({ groups }) {
  return (
    <View style={styles.cont}>
      <Text style={styles.txt}>Groups you're in</Text>
      {groups.map((group, i) => (
        <ChatRow
          key={i}
          title={group.name}
          time={group.time}
          message={group.message}
          image={group.picture}
          sender={group.sender}
        />
      ))}
    </View>
  );
}

export default JoinedGroups;

const styles = StyleSheet.create({
  txt: {
    color: "#737373",
    paddingHorizontal: 10,
    fontFamily: "OpenSans",
    fontSize: 12,
  },
  cont: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingVertical: 17,
  },
});
