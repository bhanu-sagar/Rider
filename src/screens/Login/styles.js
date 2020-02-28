import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
import { colors } from "../../constants";
export default StyleSheet.create({
  container: {
    backgroundColor: colors.bluePrimary,
    flex: 1
  },
  headerStyle: {
    backgroundColor: colors.bluePrimary,
    elevation: 0,
    shadowOpacity: 0
  },
  topContainer: {
    flex: 1,
    paddingHorizontal: width * 0.1,
    justifyContent: "center"
  },
  middleContainer: {
    flex: 2.59,
    justifyContent: "center",
    alignItems: "center"
  },
  smallTxt: {
    color: colors.light,
    fontSize: width * 0.04,
    paddingTop: height * 0.02
  },
  mediumTxt: {
    color: colors.light,
    fontSize: width * 0.09
  },
  btn: {
    backgroundColor: colors.light,
    width: width * 0.84,
    height: height * 0.1,
    borderRadius: height * 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: "14%",
    height: "80%"
  },
  seperator: {
    height: "60%",
    borderColor: colors.bluePrimary,
    borderWidth: 0.5,
    marginHorizontal: width * 0.02
  },
  btnTxt: {
    color: colors.bluePrimary,
    width: "70%",
    textAlign: "center",
    fontSize: width * 0.048
  },
  numberContainer: {
    justifyContent: "space-between",
    flex: 1
  }
});
