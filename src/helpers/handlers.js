import React from "react";
import { Toast } from "native-base";
import { View, ActivityIndicator } from "react-native";

import { colors } from "../constants";
import { strings } from "../../locale/i18n";

const showToast = (message = "", type = "success", duration = 3000) => {
  return Toast.show({
    text: message,
    buttonText: strings("handlers.okay"),
    type,
    duration
  });
};

const loader = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color={colors.bluePrimary} />
  </View>
);

export default {
  showToast,
  loader
};
