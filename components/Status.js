import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

function Status({ stat, date }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{stat}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

export default Status;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    paddingVertical: 20,
    gap: 5,
  },
  txt: {
    fontSize: 17,
    paddingHorizontal: 10,
    marginTop: 5,
    fontWeight: "500",
  },
  date: {
    fontSize: 13,
    paddingHorizontal: 10,
  },
});
