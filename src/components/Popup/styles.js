import { Dimensions, StyleSheet, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

import { colors } from "../../constants";

export default StyleSheet.create({
    popupContainer: {
        width: width / 1.03,
        height: height / 3.335,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: height / 66.7,
        paddingTop: height / 26.68,
        paddingHorizontal: width / 37.5
    },
    title: {
        color: "#fff",
        fontSize: width / 22.05,
        fontWeight: "600",
        flex: 1
    },
    description: {
        color: "#fff",
        fontSize: width / 28.84,
        fontWeight: "200",
        marginTop: height / 66.7,
        flex: 1.5,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: "row",
        flex: 1
    },
    buttonOneContainer: {
        backgroundColor: "#fff",
        padding: width / 37.5,
        borderRadius: 6
    },
    buttonOneText: {
        fontSize: width / 25,
        color: "#2870BE",
        fontWeight: "700"
    },
    buttonTwoText: {
        fontSize: width / 25,
        color: "#fff",
        padding: width / 37.5
    },
    /** Styles for Trip Finished Popup */
    tripFinishedView: {
        width: width / 1,
        height: height / 1.5
    },
    backgroundImg: {
        width: "100%",
        height: "100%"
    },
    tripFinishedContent: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: width / 10,
        paddingVertical: PixelRatio.get() <= 2
            ? height / 50
            : height / 20
    },
    priceContainer: {
        width: "50%",
        height: height / 20,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    totalPriceTxt: {
        fontSize: width / 15,
        color: "#3081DE",
        fontWeight: "500"
    },
    currencyTxt: {
        fontSize: width / 20
    },
    totalCollectedContainer: {
        flex: 0.1,
        justifyContent: "center"
    },
    totalCollectedTxt: {
        color: "#ffffff",
        fontSize: width / 25,
        fontWeight: "normal"
    },
    ratingContainer: {
        flex: PixelRatio.get() <= 2
            ? 0.8
            : 0.7,
        marginTop: height / 40,
        paddingVertical: PixelRatio.get() <= 2
            ? height / 60
            : height / 70
    },
    smileyContainer: {
        alignItems: "center"
    },
    smiley: {
        width: width / 2.5,
        height: PixelRatio.get() <= 2
            ? height / 4.2
            : height / 5
    },
    collectedBtnContainer: {
        flex: 0.3
    },
    rechargeContainer: {
        flex: 0.2,
        flexDirection: "row"
    },
    rechargeBtnView: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    rechargeBtn: {
        backgroundColor: "#ffffff",
        width: width / 2.6,
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    rechargeBtnTxt: {
        color: "#0855B6",
        fontSize: 18
    },
    rechargeAmountContainer: {
        flex: 1,
        flexDirection: "row"
    },
    inputView: {
        flex: 0.4,
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 2
    },
    input: {
        borderBottomWidth: 1,
        height: 30,
        fontSize: 20,
        borderBottomColor: "#ffffff",
        color: "#ffffff"
    },
    currencyView: {
        flex: 0.4,
        paddingTop: PixelRatio.get() <= 2
            ? height / 30
            : height / 34
    },
    rechargeCurrencyTxt: {
        color: "#ffffff",
        fontSize: 20
    }
});
