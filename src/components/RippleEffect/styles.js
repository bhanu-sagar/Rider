import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  circle: {
    backgroundColor: "#2A73BA",
    width: width / 1.875,
    height: width / 1.875,
    borderRadius: width / 3.75,
    position: "absolute"
  },
  container: {
    position: "absolute",
    top: "30%",
    left: "20%"
  }
});
