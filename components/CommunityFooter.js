import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatRow from "./ChatRow";

function CommunityFooter({ announcements, groups }) {
  const { sender, message, time } = announcements;

  function renderList(itemData) {
    const data = itemData.item;
    return (
      <ChatRow
        message={data.message}
        time={data.time}
        sender={data.sender}
        title={data.name}
        image={data.picture}
        index={itemData.index}
      />
    );
  }

  return (
    <View>
      <ChatRow message={message} time={time} sender={sender} />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
      />
    </View>
  );
}

export default CommunityFooter;
