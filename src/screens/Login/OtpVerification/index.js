import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";
import { icons } from "../../../utils";
import styles from "./styles";
import { handlers } from "../../../helpers";
import firebase from "react-native-firebase";

import { strings } from "../../../../locale/i18n";
import { requestPhoneNumberlogin } from "../../../store/auth/actions";
import { signinRequest } from "../../../config/api";

const { width, height } = Dimensions.get("window");

class OtpVerification extends React.Component {
  static navigationOptions = {
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#3472b8",
      elevation: 0,
      shadowOpacity: 0
    }
  };

  constructor() {
    super();
    this.state = {
      otp: "",
      loading: false
    };
  }

  verifyOtp = () => {
    const { otp } = this.state;
    const confirmResult = this.props.navigation.getParam("confirmResult");
    const number = this.props.navigation.getParam("number");
    if (!otp) {
      this.setState({
        numberError: !otp
      });
      return handlers.showToast(strings("signup.enter_otp_toast"), "danger");
    }

    this.setState({ loading: true });

    confirmResult
      .confirm(otp)
      .then(async user => {
        console.log(user);

        // this.props.dispatch(requestPhoneNumberlogin(number));

        this.setState({ loading: false });

        this.props.navigation.navigate("Map");

        return handlers.showToast(strings("login.logged_in_succesfully"));
      })
      .catch(error => {
        this.setState({ loading: false });

        return handlers.showToast(strings("signup.wrong_otp_toast"), "danger");
      });
  };

  render() {
    if (this.state.loading) {
      return handlers.loader();
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.signInText}>{strings("home.sign_in")}</Text>
            <Text style={styles.smsText}>{strings("signup.step_3")}</Text>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.middleInnerContainerInputWidth}>
              <Label style={styles.middleInnerContainerLabelColor}>
                {strings("signin.otp")}
              </Label>
              <Item>
                <Input
                  style={styles.middleContainerInputOnChangeColor}
                  onChangeText={text => this.setState({ otp: text })}
                  value={this.state.otp}
                  secureTextEntry
                />
              </Item>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              style={styles.bottomContainerCircleDesign}
              onPress={this.verifyOtp}
            >
              <Image
                style={styles.bottomContainerArrowImage}
                source={icons.right_arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(OtpVerification);
