import { Image, StyleSheet, Text, View } from "react-native";
import CommunityHeader from "./CommunityHeader";
import CommunityFooter from "./CommunityFooter";

function Community({ data, onPress }) {
  return (
    <View>
      <View>
        <View style={styles.row}>
          <Image
            style={styles.img}
            source={{
              uri: data.image,
            }}
          />
          <Text style={styles.txt}>{data.community}</Text>
        </View>
      </View>
      <CommunityFooter
        onPress={onPress}
        announcements={data.announcements}
        groups={data.joinedGroups}
        availableGroups={data.availableGroups}
      />
    </View>
  );
}

export default Community;

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    paddingBottom: 14,
    paddingTop: 6,
  },
  txt: {
    fontSize: 18,
  },
});
