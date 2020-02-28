import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { Thumbnail, Button } from "native-base";
import { icons, images } from "../../utils";
import styles from "./styles";
import { getUser } from "../../store/auth/reducers";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import { strings } from "../../../locale/i18n";


class Drawer extends Component {
  homeNavigation = () => {
    this.props.navigation.navigate("Map");
  };

  historyNavigation = () => {
    this.props.navigation.navigate("DrawerHistory");
  };

  notificationsNavigation = () => {
    this.props.navigation.navigate("DrawerNotifications");
  };

  referNavigation = () => {
    this.props.navigation.navigate("DrawerReferAFriend");
  };

  comingooNavigation = () => {
    this.props.navigation.navigate("DrawerComingooAndYou");
  };

  helpNavigation = () => {
    this.props.navigation.navigate("DrawerHelp");
  };

  logoutNavigation = () => {
    // just for back home page
    this.props.navigation.navigate("Home");
  };

  render() {
    const uri =
      "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <View style={styles.container}>
        <ImageBackground
          source={images.drawer_image}
          style={styles.backgroundDrawerImage}
          resizeMode="cover"
        >
          <View style={styles.innerContainer}>
            <View style={styles.innerViewContainer}>
              <View style={styles.innerThumbnailAndTextContainer}>
                <View style={styles.thumbnailContainer}>
                  <Thumbnail large source={{ uri: uri }} />
                </View>

                <View style={styles.textViewContainer}>
                  <Text style={styles.textContainer}>
                    {/* {this.props.user.full_name} */}
                    COMINGOO
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.middleContainer}>
              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.homeNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.Home}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}>{strings("drawer.home")} </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.historyNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.history}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}>
                      {" "}
                      {strings("drawer.history")}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.notificationsNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.notification}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}>
                      {" "}
                      {strings("drawer.notifications")}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.referNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.refer}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}>
                      {" "}
                      {strings("drawer.referAFriend")}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.comingooNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.heart}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}>
                      {" "}
                      {strings("drawer.comingoo&you")}{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.helpNavigation}>
                  <View style={styles.mainContainerImageAndText}>
                    <Image
                      source={icons.help}
                      style={styles.mainContainerStyles}
                      resizeMode="contain"
                    />
                    <Text style={styles.mainContainerTextStyles}> {strings("drawer.help")} </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.underline} />

            <View style={styles.bottomContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.logoutNavigation}
              >
                <View style={styles.bottomInnerContainer}>
                  <Image
                    source={icons.logout}
                    style={styles.bottomImageStyle}
                    resizeMode="contain"
                  />
                  <Text style={styles.bottomImageTextStyle}> {strings("drawer.logout")} </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: getUser(state)
//   };
// }

// export default connect(mapStateToProps)(Drawer);

export default Drawer;