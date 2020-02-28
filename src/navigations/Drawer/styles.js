import { Dimensions, StyleSheet, Platform } from "react-native";

import { colors } from "../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundDrawerImage: {
    flex: 1,
    ...Platform.select({
      android: {
        width: width / 1.117,
        height: "100%",
        resizeMode: 'cover',
      },
    }),
  },
  innerContainer: {
    flex: 1
  },
  innerViewContainer: {
    flex: Platform.OS === "android" ? 0.25 : 0.3,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: Platform.OS === "android" ? 30 : 10
  },
  innerThumbnailAndTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  thumbnailContainer: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000
  },
  textViewContainer: { flex: 1, alignItems: "flex-start", paddingLeft: 20 },
  textContainer: { fontSize: 20, color: "#fff" },
  middleContainer: {
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50
  },
  mainContainer: { flex: 1, width: "65%" },
  mainContainerImageAndText: { flexDirection: "row", alignItems: "center" },
  mainContainerStyles: {
    width: "14%",
    height: "80%"
  },
  mainContainerTextStyles: {
    fontSize: Platform.OS === 'ios' ? width / 19 : width / 20,
    fontWeight: Platform.OS === 'ios' ? '500' : '200',
    margin: 10,
    color: 'white'
  },
  underline: {
    backgroundColor: "#fff",
    height: 2,
    width: Platform.OS === "android" ? width / 1.30 : width / 1.47
  },
  bottomContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomInnerContainer: {
    flexDirection: "row",
    paddingRight: "30%",
    width: "65%"
  },
  bottomImageStyle: {
    height : Platform.OS === 'ios' ? 35 : 30,
    width : Platform.OS === 'ios' ? 35 : 30,
  },
  bottomImageTextStyle: {
    fontSize: Platform.OS === 'ios' ? width / 19 : width / 20,
    fontWeight: Platform.OS === 'ios' ? '500' : '200',
    margin: 5,
    color: 'white'
  }
});
