import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import { icons, images } from "../../../utils";
import { Icon } from "native-base";
import { colors } from "../../../constants";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

export default class Notifications extends Component {
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
      headerStyle: {
        backgroundColor: colors.blueSecondary,
        shadowOpacity: 0,
        elevation:0,
        borderBottomWidth: 0
      },
      headerTitle: <Text style={styles.menuHeaderText}>Notifications</Text>
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      exampleNotifications: [
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },

        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },

        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },

        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },
        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },

        {
          type: "information",
          title: "Summer is here, also VOIP is here!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra"
        },
        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        },

        {
          type: "promo_code",
          title: "Get %50 of all your rides!",
          description:
            "Saknia avanue al massir kadra Saknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadraSaknia avanue al massir kadravSaknia avanue al massir kadraSaknia avanue al massir kadra",
          promodeCode: "COMINGOO20"
        }
      ]
    };
  }

  renderNotifications = item => {
    if (item.type === "information") {
      return (
        <View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationTitleTxt}>{item.title}</Text>
            <Text style={styles.notificationDescriptionTxt}>
              {item.description}
            </Text>
            <Image
              source={icons.info_notification_icon}
              style={styles.infoIcon}
            />
          </View>
          <View style={styles.seperator} />
        </View>
      );
    }

    return (
      <View>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationTitleTxt}>{item.title}</Text>
          <Text style={styles.notificationDescriptionTxt}>
            {item.description}
          </Text>
          <View style={styles.promoNotificationInnerContainer}>
            <View style={styles.promoContainer}>
              <Text style={styles.promoText}>{item.promodeCode}</Text>
            </View>
            <Image
              source={icons.promo_notification_icon}
              style={styles.promoIcon}
            />
            <LinearGradient
              locations={[0.1, 0.3, 0.6]}
              colors={["#31A7DB", "#227EC4", "#227EC4"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.promoButtonContainer}
              onTouchEnd={() => console.warn("a")}
            >
              <Text style={styles.promoButtonTxt}>Apply</Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.seperator} />
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={images.notifications_bg}
        style={styles.mainContainer}
      >
        <FlatList
          contentContainerStyle={{ margin: 15 }}
          data={this.state.exampleNotifications}
          renderItem={({ item }) => this.renderNotifications(item)}
          initialNumToRender={10} // how many item to display first
          onEndReached={() => {
            console.warn("upps");
          }}
        />
      </ImageBackground>
    );
  }
}
