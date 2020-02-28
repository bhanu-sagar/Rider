import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topContainer: {
    flex: 1.1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  middleContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  bottomContainer: {
    flex: 1.4,
    alignItems: "flex-end"
  },
  logoStyles: {
    height: "70%",
    width: "70%"
  },
  middleInnerContainer: {
    height: "80%",
    backgroundColor: colors.bluePrimary,
    width: "80%",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    alignItems: "center"
  },
  middleTextContainer: {
    flex: 1,
    width: "74%",
    justifyContent: "center"
  },
  smallTxt: {
    color: colors.light,
    fontSize: width * 0.034
  },
  mediumTxt: {
    color: colors.light,
    fontSize: width * 0.07
  },
  accountColor: {
    color: colors.bluePrimary,
    fontSize: width * 0.034
  },
  signInColor: {
    color: colors.bluePrimary,
    fontSize: width * 0.07
  },
  bottomInnerContainer: {
    height: "80%",
    width: "80%",
    alignItems: "center"
  },
  bottomTextContainer: {
    flex: 1,
    width: "74%",
    justifyContent: "center"
  },
  footerContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  regularTxt: {
    fontSize: width * 0.04,
    color: colors.light
  }
});
