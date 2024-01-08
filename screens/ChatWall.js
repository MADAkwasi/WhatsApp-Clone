import { useLayoutEffect } from "react";
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import RoundBtn from "../components/RoundBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function ChatWall({ navigation, route }) {
  const params = route.params.data;
  const { firstName, lastName, messages, picture, time } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderTitle firstName={firstName} image={picture} />,
      headerTitle: "",
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chat_background.jpg")}
    >
      <View style={styles.inputCont}>
        <RoundBtn style={styles.emoji} ripple={false}>
          <FontAwesome5 name="laugh" size={24} color="#c7c7c7" />
        </RoundBtn>
        <TextInput
          style={styles.input}
          placeholder="Message"
          placeholderTextColor="#c7c7c7"
          multiline={true}
        />
        <RoundBtn style={styles.tag} rippleColor="#ddd">
          <Entypo name="attachment" size={24} color="#c7c7c7" />
        </RoundBtn>
        <RoundBtn style={styles.cam} rippleColor="#ddd">
          <FontAwesome name="camera" size={24} color="#c7c7c7" />
        </RoundBtn>
        <RoundBtn style={styles.vn} color={Colors.secondary}>
          <MaterialCommunityIcons name="microphone" size={26} color="#fff" />
        </RoundBtn>
      </View>
    </ImageBackground>
  );
}

export default ChatWall;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 10,
    paddingLeft: 40,
    paddingRight: 90,
    fontSize: 18,
    elevation: 1,
  },
  inputCont: {
    flexDirection: "row",
    width: "98%",
    alignItems: "flex-end",
    marginRight: 7,
  },
  emoji: {
    position: "absolute",
    zIndex: 2,
    bottom: 10,
  },
  vn: {
    marginBottom: 10,
    elevation: 7,
  },
  tag: {
    position: "absolute",
    zIndex: 2,
    bottom: 10,
    right: 100,
    transform: [{ rotateZ: "360deg" }, { rotateX: "180deg" }],
  },
  cam: {
    position: "absolute",
    zIndex: 2,
    bottom: 10,
    right: 60,
  },
});
