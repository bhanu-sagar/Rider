import { Dimensions, StyleSheet } from "react-native";

import { colors } from "../../../constants/index";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bluePrimary
    },
    topContainer: {
        flex: 1,
        paddingHorizontal: width * 0.1,
        justifyContent: "center"
    },
    signInText: {
        fontSize: width * 0.09,
        color: colors.light,
    },
    smsText: {
        fontSize: width * 0.04,
        paddingTop: height * 0.02,
        color: colors.light
    },
    middleContainer: {
        flex: 1.2,
        alignItems: "center",
        justifyContent: "center"
    },
    middleInnerContainerInputWidth: {
        width: "80%"
    },
    middleInnerContainerLabelColor: {
        color: colors.light
    },

    bottomContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    bottomContainerCircleDesign: {
        backgroundColor: "#fff",
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000,
        marginBottom: height * 0.06
    },
    bottomContainerArrowImage: {
        width: "80%",
        height: "60%"
    },
    middleContainerInputOnChangeColor: {
        color: colors.light
    }

})