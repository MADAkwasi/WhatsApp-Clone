import { Image, StyleSheet, Text, View } from "react-native";

function Overview({ route }) {
  const params = route.params.data;
  const { picture, firstName, contact } = params;

  return (
    <View style={styles.headerCont}>
      <Image
        source={{ uri: picture }}
        style={styles.img}
        resizeMethod="scale"
      />
      <Text style={styles.name}>{firstName}</Text>
      <Text style={styles.num}>{contact}</Text>
    </View>
  );
}

export default Overview;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  headerCont: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 7,
  },
  name: {
    fontSize: 30,
  },
  num: {
    fontSize: 15,
    color: "#737373",
  },
});
