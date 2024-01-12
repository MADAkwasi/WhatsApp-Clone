import { Image, StyleSheet, View } from "react-native";

function File({ data }) {
  return <Image style={styles.img} source={{ uri: data }} />;
}

export default File;

const styles = StyleSheet.create({
  img: { height: 100, width: 100, borderRadius: 10, marginHorizontal: 5 },
});
