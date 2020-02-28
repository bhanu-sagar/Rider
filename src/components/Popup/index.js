import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import Dialog, { DialogContent, ScaleAnimation } from "react-native-popup-dialog";
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    closeTripFinishedPopup = () => {
        this.setState({ visible: false });
        this.props.buttonOneOnPress();
    };

    render() {
        const {
            title,
            description,
            buttonOneText,
            buttonTwoText,
            buttonOneOnPress,
            buttonTwoOnPress
        } = this.props;

        return (
            <Dialog
                visible={this.state.visible}
                dialogAnimation={new ScaleAnimation({ initialValue: 0, useNativeDriver: true })}
                onTouchOutside={() => {
                    this.setState({ visible: false });
                }}
                dialogStyle={{
                    backgroundColor: null
                }}
                hasOverlay={false}
            >
                <DialogContent>
                    <LinearGradient
                        locations={[0, 0.3, 1]}
                        colors={["#4B8FD1", "#2870BE", "#185EB1"]}
                        style={styles.popupContainer}
                    >
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity
                                style={styles.buttonOneContainer}
                                onPress={() => {
                                    this.setState({ visible: false });
                                    buttonOneOnPress();
                                }}
                            >
                                <Text style={styles.buttonOneText}>{buttonOneText}</Text>
                            </TouchableOpacity>

                            {buttonTwoText && (
                                <Text
                                    style={styles.buttonTwoText}
                                    onPress={() => {
                                        this.setState({ visible: false });
                                        buttonTwoOnPress();
                                    }}
                                >
                                    {buttonTwoText}
                                </Text>
                            )}
                        </View>
                    </LinearGradient>
                </DialogContent>
            </Dialog>
        );
    }
}
