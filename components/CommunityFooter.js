import { FlatList, View } from "react-native";
import ChatRow from "./ChatRow";
import ViewMore from "./ViewMore";
import { useNavigation } from "@react-navigation/native";

function CommunityFooter({
  announcements,
  groups,
  availableGroups,
  onPress,
  community,
  image,
}) {
  const navigation = useNavigation();
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
        onPress={onPress}
      />
    );
  }

  return (
    <View>
      <ChatRow
        message={message}
        time={time}
        sender={sender}
        onPress={onPress}
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
        ListFooterComponent={
          <ViewMore
            onPress={() =>
              navigation.navigate("Community Info", {
                availableGroups,
                community,
                image,
                groups,
                announcements,
              })
            }
          />
        }
      />
    </View>
  );
}

export default CommunityFooter;
