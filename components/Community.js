import { Image, StyleSheet, Text, View } from "react-native";
import CommunityHeader from "./CommunityHeader";
import CommunityFooter from "./CommunityFooter";

function Community({ data, groups }) {
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
        announcements={data.announcements}
        groups={data.groups}
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
    marginVertical: 15,
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    borderTopWidth: 1,
    borderTopColor: "#d9d9d9",
    paddingVertical: 16,
  },
  txt: {
    fontSize: 18,
  },
});
