import { Image, StyleSheet, Text } from "react-native";

function HeaderLeft({ image }) {
  return <Image style={styles.img} source={{ uri: image }} />;
}

export default HeaderLeft;

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: -20,
  },
});
