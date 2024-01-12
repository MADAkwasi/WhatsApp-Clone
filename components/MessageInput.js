import { Button, StyleSheet, TextInput, View } from "react-native";
import RoundBtn from "./RoundBtn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useEffect } from "react";

function MessageInput({
  setMessages,
  msg,
  setMsg,
  messages,
  onCamera,
  sendTxt,
}) {
  const [permissionResponse, requestPermissions] = Audio.usePermissions();
  const [recording, setRecording] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [uri, setUri] = useState();
  const [sound, setSound] = useState();

  async function startRecording() {
    try {
      setIsRecording(true);
      if (permissionResponse.status !== "granted") {
        await requestPermissions();
      }
    } catch (err) {
      console.log(err);
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const { recording } = await Audio.Recording.createAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    setRecording(recording);
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

  console.log(uri);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.inputCont}>
      <View style={{ top: -200, left: 200 }}>
        <Button onPress={playSound} title={sound ? `playing...` : `play`} />
      </View>
      <RoundBtn style={styles.emoji} ripple={false}>
        <FontAwesome5 name="laugh" size={24} color="#c7c7c7" />
      </RoundBtn>
      <TextInput
        style={styles.input}
        placeholder="Message"
        placeholderTextColor="#c7c7c7"
        multiline={true}
        value={msg}
        onChangeText={(e) => setMsg(e)}
      />
      <RoundBtn
        style={[styles.tag, { right: msg ? 60 : 100 }]}
        rippleColor="#ddd"
      >
        <Entypo name="attachment" size={24} color="#c7c7c7" />
      </RoundBtn>
      {!msg && (
        <RoundBtn onPress={onCamera} style={styles.cam} rippleColor="#ddd">
          <FontAwesome name="camera" size={24} color="#c7c7c7" />
        </RoundBtn>
      )}
      <RoundBtn
        style={styles.vn}
        onPress={msg ? sendTxt : isRecording ? stopRecording : startRecording}
        color={Colors.secondary}
      >
        {msg ? (
          <Ionicons name="send-sharp" size={24} color="#fff" />
        ) : (
          <MaterialCommunityIcons
            name="microphone"
            size={26}
            color={isRecording ? "#f70a0a" : "#fff"}
          />
        )}
      </RoundBtn>
    </View>
  );
}

export default MessageInput;

const styles = StyleSheet.create({
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
    transform: [{ rotateZ: "360deg" }, { rotateX: "180deg" }],
  },
  cam: {
    position: "absolute",
    zIndex: 2,
    bottom: 10,
    right: 60,
  },
});
