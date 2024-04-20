import { useLayoutEffect } from "react";
import { ImageBackground, StyleSheet, TextInput, View } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import RoundBtn from "../components/RoundBtn";

import { Camera, CameraType, takePictureAsync } from "expo-camera";
import { launchCameraAsync } from "expo-image-picker";
import MessageInput from "../components/MessageInput";
import { useState } from "react";
import MessageBubble from "../components/MessageBubble";
import { Audio } from "expo-av";

function ChatWall({ navigation, route }) {
  const params = route.params.data;
  const { firstName, messages, picture, time } = params;
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [message, setMessage] = useState([]);
  const [msg, setMsg] = useState("");
  const [permissionResponse, requestPermissions] = Audio.usePermissions();
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        await requestPermissions();
      }
    } catch (err) {
      console.log(err);
    }

    setIsRecording(true);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const data = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );

    console.log("recording: ", data);
    setRecording(data.recording);
  }

  async function stopRecording() {
    setIsRecording(false);
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    setUri(recording.getURI());
  }

  function handlePress() {
    navigation.navigate("Overview", { data: params });
  }

  async function handleCamera() {
    const data = await takePictureAsync({ allowsEditing: true });
  }

  function sendTxt() {
    setMessage((mg) => [...mg, msg]);
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
        startRecording={startRecording}
        onCamera={handleCamera}
        messages={message}
        setMessages={setMessage}
        msg={msg}
        setMsg={setMsg}
        isRecording={isRecording}
        stopRecording={stopRecording}
        uri={uri}
        sound={sound}
        setSound={setSound}
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
