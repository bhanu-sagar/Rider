import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Share
} from "react-native";

import { Icon } from "native-base";

import { icons, images } from "../../../utils";
import mainStyles from "../../../components/Main/styles";
import styles from "./styles";
import { strings } from "../../../../locale/i18n";

import LinearGradient from "react-native-linear-gradient";

export default class ReferAFriend extends Component {
  static navigationOptions = ({ ...props }) => {
    return {
      headerLeft: (
        <TouchableOpacity
          style={styles.menuButtonContainer}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Icon name="menu" type="Entypo" style={styles.menuIcon} />
        </TouchableOpacity>
      ),
      /* headerBackground: (
        <LinearGradient
          colors={["#155CB0", "#12529e"]}
          style={{ flex: 1 }}
          locations={[0.95, 0.05]}
        />
      ), */
      headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: "#155AB0"
      }
    };
  };

  refer = async () => {
    try {
      const result = await Share.share({
        message: "Application download link will here" // we can use https://manage.appurl.io for this.
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.warn(result.activityType);
        } else {
          console.warn("shared");
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        console.warn("dismissed");
        // dismissed
      }
    } catch (error) {
      console.warn(error.message);
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.mainContainer}
        source={images.refer_friend_bg}
      >
        <Image
          source={images.refer_friend_friends}
          style={styles.referFriendImage}
        />
        <Text style={styles.referFriendTxt}>
          {strings("refer_a_friend.refer_a_friend")}
        </Text>
        <Text style={styles.middleTxt}>
          {strings("refer_a_friend.middle_text")}
        </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.refer}>
          <Text style={styles.buttonTxt}>
            {strings("refer_a_friend.refer")}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
