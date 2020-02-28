//import liraries
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput
} from "react-native";
import styles from "./styles";
import StarRating from "react-native-star-rating";
import { strings } from "../../../locale/i18n";
import Dialog, { DialogContent, ScaleAnimation } from "react-native-popup-dialog";

const boxBg = require("../../assets/images/box.png");
const twoStars = require("../../assets/images/2-stars.png");
const threeStars = require("../../assets/images/3-stars.png");
const fourStar = require("../../assets/images/4-stars.png");
const fiveStars = require("../../assets/images/5-stars.png");
const unselectedStar = require("../../assets/images/unselected-star.png");
const selectedStars = require("../../assets/images/selected-stars.png");
const normalStar = require("../../assets/images/normal-star.png");
const collectedButton = require("../../assets/images/collected-bt.png");
// create a component
class TripFinished extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            text: "",
            visible: true
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    initiateClosing = async () => {
        this.setState({ visible: false }, async () => {
            await this.props.ctaBtn();
        });
    };

    render() {
        console.log("PROPS", this.props);
        const { ctaBtn } = this.props;
        return (
            <Dialog
                visible={this.state.visible}
                dialogAnimation={new ScaleAnimation({ initialValue: 0, useNativeDriver: true })}
                onTouchOutside={() => this.setState({ visible: false })}
                dialogStyle={{
                    backgroundColor: null
                }}
            >
                <View style={styles.tripFinishedView}>
                    <ImageBackground
                        source={boxBg}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        resizeMode="cover"
                    >
                        <View style={styles.tripFinishedContent}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.totalPriceTxt}>
                                    18&nbsp;
                                    <Text style={styles.currencyTxt}>MAD</Text>
                                </Text>
                            </View>
                            <View style={styles.totalCollectedContainer}>
                                <Text style={styles.totalCollectedTxt}>
                                    {strings("tripFinishedPopup.amountToBeCollected")}
                                </Text>
                            </View>
                            <View style={styles.ratingContainer}>
                                <View style={styles.ratingTxt}>
                                    <Text
                                        style={{
                                            color: "#0855B6",
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {strings("tripFinishedPopup.evaluateTrip")}
                                    </Text>
                                </View>
                                <View style={styles.smileyContainer}>
                                    {this.state.starCount <= 2 && (
                                        <Image source={twoStars} style={styles.smiley} />
                                    )}
                                    {this.state.starCount === 3 && (
                                        <Image source={threeStars} style={styles.smiley} />
                                    )}
                                    {this.state.starCount === 4 && (
                                        <Image source={fourStar} style={styles.smiley} />
                                    )}

                                    {this.state.starCount === 5 && (
                                        <Image source={fiveStars} style={styles.smiley} />
                                    )}
                                </View>
                                <View style={styles.starRatingContainer}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        selectedStar={rating => this.onStarRatingPress(rating)}
                                        emptyStar={unselectedStar}
                                        fullStar={selectedStars}
                                    />
                                </View>
                            </View>
                            <View style={styles.collectedBtnContainer}>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log("COLLECTED BTN PRESSED");
                                    }}
                                >
                                    <ImageBackground
                                        source={collectedButton}
                                        style={{
                                            width: 300,
                                            height: 70,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Text style={{ color: "#ffffff", fontSize: 20 }}>
                                            {strings("tripFinishedPopup.collected")}
                                        </Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.rechargeContainer}>
                                <View style={styles.rechargeBtnView}>
                                    <TouchableOpacity
                                        style={styles.rechargeBtn}
                                        onPress={() => {
                                            console.log("RECHARGE BTN PRESSED");
                                        }}
                                    >
                                        <Text style={styles.rechargeBtnTxt}>
                                            {strings("tripFinishedPopup.recharge")}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rechargeAmountContainer}>
                                    <View style={styles.inputView}>
                                        <TextInput
                                            style={{
                                                height: 40,
                                                borderColor: "gray",
                                                borderWidth: 1
                                            }}
                                            onChangeText={text => this.setState({ text })}
                                            value={this.state.text}
                                            underlineColorAndroid="transparent"
                                            style={styles.input}
                                            maxLength={4}
                                            keyboardType="numeric"
                                        />
                                    </View>
                                    <View style={styles.currencyView}>
                                        <Text style={styles.rechargeCurrencyTxt}>MAD</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Dialog>
        );
    }
}

//make this component available to the app
export default TripFinished;
