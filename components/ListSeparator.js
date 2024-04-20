import { StyleSheet, Text, View } from "react-native";

function ListSeparator() {
  return <View style={styles.cont}></View>;
}

export default ListSeparator;

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#ebeced",
    height: 10,
  },
});
