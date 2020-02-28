import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  referFriendImage: {
    width: width / 1.875,
    height: width / 2.5,
    marginTop: height / 13.34
  },
  referFriendTxt: {
    color: "#fff",
    fontSize: width / 9.375,
    marginTop: height / 13.34
  },
  menuIcon: {
    color: "#fff",
    fontSize: width / 18.75
  },
  menuButtonContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: width / 22.05,
    justifyContent: "center",
    alignItems: "center",
    width: width / 11.02,
    height: width / 11.02,
    borderRadius: width / 22.04
  },
  middleTxt: {
    color: "#fff",
    fontSize: width / 21,
    fontWeight: "300",
    marginTop: height / 66.7,
    textAlign: "center",
    paddingHorizontal: width / 37.5
  },
  buttonContainer: {
    backgroundColor: "#fff",
    marginTop: height / 11.11,
    width: "85%",
    paddingVertical: height / 66.7,
    alignItems: "center",
    height: height / 13.34,
    justifyContent: "center",
    borderRadius: 5
  },
  buttonTxt: {
    fontSize: width / 18.75,
    color: colors.blueSecondary,
    fontWeight: "600"
  }
});
