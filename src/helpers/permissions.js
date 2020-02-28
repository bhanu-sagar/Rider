import Permissions from "react-native-permissions";

const checkLocationPermission = async () => {
  const hasPermission = await Permissions.check("location");
  return hasPermission;
};

const requestLocationPermission = async () => {
  const permission = await Permissions.request("location");
  if (permission !== "authorized") {
    throw Object.assign({
      message: "In order to continue you have grant us location permission"
    });
  }
  return permission;
};

export default {
  checkLocationPermission,
  requestLocationPermission
};
