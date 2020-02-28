import { Dimensions, StyleSheet, Platform } from "react-native";
import { colors } from "../../../constants";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
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
  menuIcon: {
    color: "#fff",
    fontSize: width / 18.75
  },
  menuHeaderText: {
    ...Platform.select({
      android: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%',
        flex: 0.8, color: "#fff", fontSize: width / 17.85, fontWeight: "600"
      },
      ios: {
        color: "#fff", fontSize: width / 17.85, fontWeight: "600"
      }
    }),
  },
  notificationContainer: {
    backgroundColor: "#fff",
    paddingTop: height / 55.58,
    borderRadius: 7,
    paddingHorizontal: width / 23.43,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  notificationTitleTxt: {
    textAlign: "center",
    marginBottom: height / 55.58,
    fontSize: width / 22.05,
    fontWeight: "600",
    color: colors.blueSecondary
  },
  notificationDescriptionTxt: {
    textAlign: "center",
    marginBottom: height / 55.58,
    fontSize: width / 23.43,
    color: "#939393",
    fontWeight: "300"
  },
  infoIcon: { width: width / 6.818, height: width / 7.5 },
  seperator: { height: height / 13.34, backgroundColor: null },
  promoNotificationInnerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center"
  },
  promoContainer: {
    borderWidth: 1.5,
    borderColor: "#939393",
    borderStyle: "dashed",
    justifyContent: "center",
    paddingHorizontal: 4,
    height: height / 26.68,
    position: "absolute",
    left: 0
  },
  promoText: { fontSize: width / 31.25, color: colors.bluePrimary },
  promoIcon: { width: width / 5.769, height: width / 6.25 },
  promoButtonContainer: {
    paddingHorizontal: width / 12.5,
    justifyContent: "center",
    height: height / 22.23,
    position: "absolute",
    right: 0,
    borderRadius: 5
  },
  promoButtonTxt: { color: "#fff" },
  mainContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
});
