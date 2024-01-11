import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Status from "../components/Status";
import Media from "../components/Media";

function Overview({ route }) {
  const params = route.params.data;
  const { picture, firstName, contact, status, date, sharedFiles } = params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header picture={picture} firstName={firstName} contact={contact} />
        <Status stat={status} date={date} />
        <Media file={sharedFiles} />
      </View>
    </ScrollView>
  );
}

export default Overview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    // backgroundColor: "brown",
  },
});
