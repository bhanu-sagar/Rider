import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";
import { Item, Label, Input } from "native-base";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";

import { handlers } from "../../helpers";
import { loginWithFacebook } from "../../config/facebook";

import styles from "./styles";

import { colors } from "../../constants";
import { icons } from "../../utils";
import firebase from "react-native-firebase";

import { strings } from "../../../locale/i18n";
import { signupRequest } from "../../config/api";

class Signup extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      numberError: false,
      number: "",
      otp: "",
      confirmResult: null,
      cca2: "US",
      userInfo: {},
      loading: false
    };
  }

  next = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  login = async () => {
    try {
      this.setState({ loading: true });

      const user = await loginWithFacebook();

      this.setState({ loading: false });

      if (user) {
        this.setState({ userInfo: user });
        this.next();
      }
    } catch (error) {
      this.setState({ loading: false });

      console.log(error);
    }
  };

  sendOTP = () => {
    const { number } = this.state;

    if (!number) {
      this.setState({
        numberError: !number
      });
      return handlers.showToast(strings("signup.enter_phone_toast"), "danger");
    }

    this.setState({ loading: true });

    firebase
      .auth()
      .signInWithPhoneNumber(number)
      .then(confirmResult => {
        this.setState({ confirmResult, loading: false });
        this.next();
        return handlers.showToast(strings("signup.code_sent_your_phone"));
      })
      .catch(error => console.log(error));
  };

  verifyOTP = async () => {
    const { otp, confirmResult } = this.state;
    if (!otp) {
      this.setState({
        numberError: !otp
      });
      return handlers.showToast(strings("signup.enter_otp_toast"), "danger");
    }

    this.setState({ loading: true });

    const userData = {
      ...this.state.userInfo,
      phone_number: this.state.number
    };
    const result = await signupRequest(userData);

    confirmResult
      .confirm(otp)
      .then(user => {
        if (!result.success) {
          this.props.navigation.navigate("Home");
          this.setState({ loading: false });

          return handlers.showToast(result.message, "danger");
        }
        this.props.navigation.navigate("Map");
        AsyncStorage.setItem("COMINGOO_TOKEN", userData.access_token);

        this.setState({ loading: false });

        // user successfully signup, will navigate to extpage...
        return handlers.showToast(strings("signup.code_confirmed"));
      })
      .catch(error => {
        this.setState({ loading: false });
        handlers.showToast(strings("signup.code_incorrect"), "danger");
      });
  };

  facebootBtn = () => (
    <TouchableOpacity style={styles.btn} onPress={this.login}>
      <Image
        source={icons.fb_icon}
        style={styles.iconStyle}
        resizeMode="contain"
      />
      <View style={styles.seperator} />
      <Text style={styles.btnTxt}>{strings("signup.continue_with_fb")}</Text>
    </TouchableOpacity>
  );

  onPressFlag = () => {
    this.countryPicker.openModal();
  };

  selectCountry = country => {
    this.phone.selectCountry(country.cca2.toLowerCase());
    this.setState({ cca2: country.cca2 });
  };

  numberInput = () => {
    const { number, numberError } = this.state;

    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs} error={numberError}>
          <Label style={styles.labelStyle}>
            {strings("signup.phone_number")}
          </Label>
          <PhoneInput
            ref={ref => {
              this.phone = ref;
            }}
            onPressFlag={this.onPressFlag}
            style={styles.inputStyle}
            textStyle={styles.phoneNumberText}
            onChangePhoneNumber={phoneNumberText =>
              this.setState({ number: phoneNumberText })
            }
            value={number}
          />
          <CountryPicker
            ref={ref => {
              this.countryPicker = ref;
            }}
            onChange={value => this.selectCountry(value)}
            translation={strings("signup.phone_number_language")}
            cca2={this.state.cca2}
          >
            <View />
          </CountryPicker>
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.sendOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  otpInput = () => {
    const { otp } = this.state;
    return (
      <View style={styles.numberContainer}>
        <Item stackedLabel style={styles.inputs}>
          <Label style={styles.labelStyle}>OTP</Label>
          <Input
            style={styles.inputStyle}
            keyboardType="number-pad"
            value={otp}
            onChangeText={otpInput => this.setState({ otp: otpInput })}
            error
            secureTextEntry
          />
        </Item>
        <TouchableOpacity style={styles.nextBtn} onPress={this.verifyOTP}>
          <Image style={styles.btnImage} source={icons.right_arrow} />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { step } = this.state;
    if (this.state.loading) {
      return handlers.loader();
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.mediumTxt}>{strings("signup.sign_up")}</Text>
            <Text style={styles.smallTxt}>
              {step === 1
                ? strings("signup.step_1")
                : step === 2
                ? strings("signup.step_2")
                : strings("signup.step_3")}
            </Text>
          </View>
          <View style={styles.middleContainer}>
            {step === 1
              ? this.facebootBtn()
              : step === 2
              ? this.numberInput()
              : this.otpInput()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
