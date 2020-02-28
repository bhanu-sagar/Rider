import React, { Component } from "react";
import { View, findNodeHandle, Platform, InteractionManager } from "react-native";
import { Provider } from "react-redux";
import { Root } from "native-base";

import { BlurView, VibrancyView } from "react-native-blur";

import { permissions, handlers } from "../helpers";
import io from "socket.io-client";
import { store } from "../store";
import AppNavigator from "../navigations/index";
import { Popup } from "../components";
import TripFinished from "../components/Popup/TripFinishedPopup";

import styles from "./styles";

export default class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowingPopup: false, // We can control with redux.
            // For popup we can create functions like showPopup(title,descriptiion etc). and
            // we can return different popup according to props. When popup close, we can
            // set isBlur as false with redux.
            showTripFinishedPopup: true,
            viewRef: null
        };
        /** Establishing socket connection */
        this.socket = io("https://comingoo-api.herokuapp.com", { jsonp: false });
    }

    componentDidMount = async () => {
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => {
                const viewRef = findNodeHandle(this._viewRef);
                this.setState({ viewRef });
            }, 0);
        });

        const hasPermissions = await permissions.checkLocationPermission();
        try {
            await permissions.requestLocationPermission();
        } catch (error) {
            handlers.showToast(error.message, "danger");
        }
    };

    render() {
        return (
            <Root>
                <Provider store={store}>
                    <View
                        style={[
                            styles.mainView,
                            {
                                opacity:
                                    this.state.isShowingPopup && Platform.OS === "android" ? 0 : 1
                            }
                        ]}
                        ref={ref => (this._viewRef = ref)}
                    >
                        <AppNavigator />
                        <View />
                        {this.state.isShowingPopup && (
                            <Popup
                                title="Voulez-vous vraiment annuler la course?"
                                description="Des frais supplementaires peuvent etra appliques"
                                buttonOneText="Non, je ne veux pas annuler"
                                buttonTwoText="Oui, jen suis sur"
                                buttonOneOnPress={() => {
                                    this.setState({ isShowingPopup: false });
                                }}
                                buttonTwoOnPress={() => {
                                    this.setState({ isShowingPopup: false });
                                }}
                                showTripFinishedPopup
                            />
                        )}
                        {this.state.showTripFinishedPopup && <TripFinished />}
                    </View>
                    {this.state.isShowingPopup && (
                        <BlurView
                            style={styles.blurView}
                            blurType="light"
                            blurAmount={3}
                            viewRef={this.state.viewRef}
                        />
                    )}
                </Provider>
            </Root>
        );
    }
}
