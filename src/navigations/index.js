import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Dimensions, Image, Platform } from "react-native";
import MapScreen from "../screens/Map";
import login from "../screens/Login";
import signUp from "../screens/Signup";
import HomeScreen from "../screens/Home";
import loginPhoneNumber from "../screens/Login/PhoneNumber";
import loginOtp from "../screens/Login/OtpVerification";
import Drawer from "./Drawer";
import Main from "../components/Main";
import DrawerHome from "../screens/DrawerScreens/Home";
import DrawerHistory from "../screens/DrawerScreens/History";
import DrawerNotifications from "../screens/DrawerScreens/Notifications";
import DrawerReferAFriend from "../screens/DrawerScreens/ReferAFriend";
import DrawerComingooAndYou from "../screens/DrawerScreens/ComingooAndYou";
import DrawerHelp from "../screens/DrawerScreens/Help";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../utils";
import styles from "../components/Main/styles";

const deviceWidth = Dimensions.get("window").width;

const MainPageStack = createStackNavigator({
  // MainPage: { screen: Main }
  Map: { screen: MapScreen }
});

const DrawerHomeStack = createStackNavigator({
  DrawerHome: { screen: DrawerHome }
});

const DrawerHistoryStack = createStackNavigator({
  DrawerHistory: { screen: DrawerHistory }
});

const DrawerNotificationsStack = createStackNavigator({
  DrawerNotifications: { screen: DrawerNotifications }
});

const DrawerReferAFriendStack = createStackNavigator({
  DrawerReferAFriend: { screen: DrawerReferAFriend }
});

const DrawerComingooAndYouStack = createStackNavigator({
  DrawerComingooAndYou: { screen: DrawerComingooAndYou }
});

const DrawerHelpStack = createStackNavigator({
  DrawerHelp: { screen: DrawerHelp }
});

const DrawerScreens = createDrawerNavigator(
  {
    MainPage: {
      screen: MainPageStack
    },
    DrawerHome: {
      screen: DrawerHomeStack
    },
    DrawerHistory: {
      screen: DrawerHistoryStack
    },
    DrawerNotifications: {
      screen: DrawerNotificationsStack
    },
    DrawerReferAFriend: {
      screen: DrawerReferAFriendStack
    },
    DrawerComingooAndYou: {
      screen: DrawerComingooAndYouStack
    },
    DrawerHelp: {
      screen: DrawerHelpStack
    }
  },
  {
    // drawerWidth:
    //   Platform.OS === "ios" ? deviceWidth / 1.47 : deviceWidth / 1.53,
    initialRouteName: "MainPage",
    contentComponent: props => <Drawer {...props} />
  }
);

const AuthScreens = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: login
  },
  // Map: { screen: MapScreen },
  LoginPhoneNumber: {
    screen: loginPhoneNumber
  },
  LoginOtp: {
    screen: loginOtp
  },
  Signup: {
    screen: signUp
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthScreens: { screen: AuthScreens },
      DrawerScreens: { screen: DrawerScreens }
    },
    {
      initialRouteName: "AuthScreens"
    }
  )
);
