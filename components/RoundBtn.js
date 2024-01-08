import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";

function RoundBtn({
  children,
  color,
  style,
  ripple = true,
  onPress,
  rippleColor,
}) {
  return (
    <View style={[styles.outerCont, style, { backgroundColor: color }]}>
      <Pressable
        style={styles.innerCont}
        android_ripple={ripple && { color: rippleColor || Colors.primary }}
        onPress={onPress}
      >
        {children}
      </Pressable>
    </View>
  );
}

export default RoundBtn;

const styles = StyleSheet.create({
  outerCont: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  innerCont: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
