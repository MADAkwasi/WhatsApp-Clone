import { FlatList, StyleSheet, Text, View } from "react-native";
import File from "./File";
import { Colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

function Media({ file }) {
  function renderFiles(itemData) {
    const data = itemData.item;
    return <File id={data} data={data} />;
  }

  return (
    <>
      {file && (
        <View style={styles.container}>
          <View style={styles.txtCont}>
            <Text style={styles.txt}>Media, links and docs</Text>
            <View style={styles.quan}>
              <Text style={styles.quanTxt}>{file.length}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#737373" />
            </View>
          </View>
          <FlatList
            data={file}
            keyExtractor={(item) => item}
            renderItem={renderFiles}
            horizontal={true}
          />
        </View>
      )}
    </>
  );
}

export default Media;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    elevation: 2,
    gap: 7,
    paddingVertical: 10,
  },
  txt: {
    color: "#737373",
    paddingHorizontal: 10,
    fontFamily: "OpenSans",
  },
  txtCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quan: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  quanTxt: {
    color: "#737373",
    fontSize: 15,
  },
});
