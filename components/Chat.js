import { Image, StyleSheet, Text, View } from "react-native";

function Chat({ data }) {
  const { firstName, lastName, picture, messages } = data;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: picture }} />
      <View>
        <View style={styles.nameCont}>
          <Text style={styles.name}>{firstName}</Text>
          <Text style={styles.name}>{lastName}</Text>
        </View>
        <View style={styles.msgCont}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {messages}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 85,
    alignItems: "center",
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 12,
  },
  nameCont: {
    flexDirection: "row",
  },
  name: {
    marginHorizontal: 3,
    fontSize: 15,
  },
  msgCont: {
    width: "85%",
  },
});
