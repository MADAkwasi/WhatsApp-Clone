import { StyleSheet, Switch, Text, View } from "react-native";

function Item({ btn = false, des, details, children, style }) {
  return (
    <View style={[styles.cont, btn && { paddingVertical: 4 }]}>
      <View style={styles.details}>
        {children}
        {details ? (
          <View>
            <Text style={[styles.des, style]}>{des}</Text>
            <Text style={styles.det}>{details}</Text>
          </View>
        ) : (
          <Text style={[styles.des, style]}>{des}</Text>
        )}
      </View>
      {btn && <Switch />}
    </View>
  );
}

export default Item;
// color: "#737373",

const styles = StyleSheet.create({
  cont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
    marginHorizontal: 20,
    width: "70%",
  },
  des: {
    fontSize: 18,
    fontFamily: "OpenSans",
  },
  det: {
    color: "#737373",
    fontSize: 15,
    fontFamily: "OpenSans",
  },
});
