import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../constants";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },

  drawerMenuStyle: {
    width: 30,
    height: 30,
    marginLeft: 10
  },

  findingText: {
    position: "absolute",
    bottom: "10%",
    fontSize: width / 12.5,
    color: colors.blueSecondary,
    textAlign: "center",
    left: 3,
    right: 3
  }
});
