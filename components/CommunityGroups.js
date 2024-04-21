import { StyleSheet, Text, View } from "react-native";
import ChatRow from "./ChatRow";

function CommunityGroups({ groups }) {
  return (
    <View style={styles.cont}>
      <Text style={styles.txt}>Groups you can join</Text>
      {groups.map((group, i) => (
        <ChatRow key={i} title={group.name} image={group.groupIcon} />
      ))}
    </View>
  );
}

export default CommunityGroups;

const styles = StyleSheet.create({
  txt: {
    color: "#737373",
    paddingHorizontal: 10,
    fontFamily: "OpenSans",
    fontSize: 12,
  },
  cont: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    paddingVertical: 17,
    // marginBottom: 50,
  },
});
