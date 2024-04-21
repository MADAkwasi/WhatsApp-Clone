import { Image, StyleSheet, Text, View } from "react-native";

function CommunityDetails({ image, community, groups }) {
  return (
    <View style={styles.header}>
      <Image source={{ uri: image }} style={styles.img} />
      <View>
        <Text style={styles.txt}>{community}</Text>
        <Text style={styles.info}>Community . {groups?.length} groups</Text>
      </View>
    </View>
  );
}

export default CommunityDetails;

const styles = StyleSheet.create({
  img: {
    height: 73,
    width: 73,
    marginLeft: 20,
  },
  header: {
    height: 150,
    backgroundColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    gap: 10,
  },
  txt: {
    fontFamily: "OpenSans",
    fontSize: 21,
  },
  info: {
    fontSize: 12,
    fontFamily: "OpenSans",
  },
});
