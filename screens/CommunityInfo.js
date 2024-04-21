import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, ScrollView, View } from "react-native";
import CommunityDetails from "../components/CommunityDetails";
import ChatRow from "../components/ChatRow";
import JoinedGroups from "../components/JoinedGroups";
import CommunityGroups from "../components/CommunityGroups";
import AddGroup from "../components/AddGroup";

function CommunityInfo() {
  const navigation = useNavigation();
  const data = useRoute();
  const community = data.params.community;
  const image = data.params.image;
  const groups = data.params.availableGroups;
  const joinedGroups = data.params.groups;
  const { sender, message, time } = data.params.announcements;

  return (
    <View style={styles.cont}>
      <ScrollView>
        <CommunityDetails community={community} image={image} groups={groups} />
        <ChatRow
          sender={sender}
          message={message}
          time={time}
          onPress={() =>
            navigation.navigate("CommunityChat", { sender, message, time })
          }
        />
        <JoinedGroups groups={joinedGroups} />
        <CommunityGroups groups={groups} />
      </ScrollView>
      <AddGroup />
    </View>
  );
}

export default CommunityInfo;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});
