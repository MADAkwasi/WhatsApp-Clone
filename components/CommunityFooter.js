import { StyleSheet, Text, View } from "react-native";
import ChatRow from "./ChatRow";

function CommunityFooter({ announcements }) {
  const { sender, message, time } = announcements;
  return (
    <View>
      <ChatRow message={message} time={time} sender={sender} />
      <ChatRow message={message} time={time} sender={sender} />
      <ChatRow message={message} time={time} sender={sender} />
    </View>
  );
}

export default CommunityFooter;
