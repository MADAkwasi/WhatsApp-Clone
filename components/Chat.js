import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function Chat({ data, onPress }) {
  const { firstName, lastName, picture, messages, time } = data;

  return (
    <Pressable onPress={onPress} android_ripple={{ color: "#ddd" }}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={{ uri: picture }}
        />
        <View style={styles.chatCont}>
          <View style={styles.infoCont}>
            <View style={styles.nameCont}>
              <Text style={styles.name}>{firstName}</Text>
              {/* <Text style={styles.name}>{lastName}</Text> */}
            </View>
            <View>
              <Text style={styles.time}>{time}</Text>
            </View>
          </View>
          <View>
            <Text numberOfLines={1} ellipsizeMode="tail">
              {messages}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
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
  infoCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    marginHorizontal: 3,
    fontSize: 15,
  },
  time: {
    // marginHorizontal: 3,
    fontSize: 12,
  },
  chatCont: {
    width: "72%",
    gap: 2,
  },
});
