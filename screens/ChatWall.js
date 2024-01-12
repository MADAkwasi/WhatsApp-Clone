import { useLayoutEffect } from "react";
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import RoundBtn from "../components/RoundBtn";

import { Camera, CameraType, takePictureAsync } from "expo-camera";
import { launchCameraAsync } from "expo-image-picker";
import MessageInput from "../components/MessageInput";
import { useState } from "react";
import MessageBubble from "../components/MessageBubble";

function ChatWall({ navigation, route }) {
  const params = route.params.data;
  const { firstName, lastName, messages, picture, time } = params;
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [message, setMessage] = useState([]);
  const [msg, setMsg] = useState("");

  function handlePress() {
    navigation.navigate("Overview", { data: params });
  }

  async function handleCamera() {
    const data = await takePictureAsync({ allowsEditing: true });
  }

  function sendTxt() {
    setMessage((mg) => [...mg, msg]);
    console.log(message);
    setMsg("");
  }

  function sendAud() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderTitle
          onPress={handlePress}
          firstName={firstName}
          image={picture}
        />
      ),
      headerTitle: "",
    });
  }, [navigation]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/chat_background.jpg")}
    >
    
      <MessageInput
        sendTxt={sendTxt}
        sendAud={sendAud}
        onCamera={handleCamera}
        messages={message}
        setMessages={setMessage}
        msg={msg}
        setMsg={setMsg}
      />
      {message?.map((mg, i) => (
        <MessageBubble text={mg} key={i} />
      ))}
    </ImageBackground>
  );
}

export default ChatWall;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column-reverse",
  },
});
