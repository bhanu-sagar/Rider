import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { colors } from "../../constants";
import { icons } from "../../utils";
import { loginWithFacebook } from "../../config/facebook";
import { strings } from "../../../locale/i18n";
import { requestFacebooklogin } from "../../store/auth/actions";
import { handlers } from "../../helpers";
import { signinRequest } from "../../config/api";

class Login extends React.Component {
  static navigationOptions = () => ({
    headerTintColor: colors.light,
    headerStyle: styles.headerStyle
  });

  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  phoneNumberScreen = () => {
    this.props.navigation.navigate("LoginPhoneNumber");
  };

  facebookAuthentication = async () => {
    try {
      this.setState({ loading: true });
      const user = await loginWithFacebook();
      //await this.props.dispatch(requestFacebooklogin(user.email));
      const result = await signinRequest(user);

      this.setState({ loading: false });
      if (result.auth_token) {
        this.props.navigation.navigate("Map");
        handlers.showToast(strings("login.logged_in_succesfully"));
      }
      else if (result.message) {
        handlers.showToast(strings("signup.step_1"), "danger");
      }

      //this.props.navigation.navigate("Map");
    } catch (error) {
      this.setState({ loading: false });
      console.log(error);
    }
  };

  buttons = () => (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={this.facebookAuthentication}
      >
        <Image
          source={icons.fb_icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View style={styles.seperator} />
        <Text style={styles.btnTxt}>
          {strings("login.login_with_facebook")}
        </Text>
      </TouchableOpacity>
      <Text> </Text>

      <TouchableOpacity style={styles.btn} onPress={this.phoneNumberScreen}>
        <Image
          source={icons.fb_icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
        <View style={styles.seperator} />
        <Text style={styles.btnTxt}>
          {strings("login.login_with_phone_number")}
        </Text>
      </TouchableOpacity>
    </View>
  );
  render() {
    if (this.state.loading) {
      return handlers.loader();
    }
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.mediumTxt}>{strings("home.sign_in")}</Text>
          <Text style={styles.smallTxt}>
            {strings("login.sign_in_with_facebook_or_phone_number")}
          </Text>
        </View>
        <View style={styles.middleContainer}>{this.buttons()}</View>
      </View>
    );
  }
}
const mapStateToProps = state => ({});
// const mapDispatchToProps = {};
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
export default connect(mapStateToProps)(Login);
