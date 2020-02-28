import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken
} from "react-native-fbsdk";

export const loginWithFacebook = async () => {
  const permissoins = ["email", "public_profile"];
  const graphApiFields = "/me?fields=first_name,last_name,email";
  const graphApiFieldsForPic = "/me/picture?type=large&redirect=false";

  return new Promise(async (resolve, reject) => {
    LoginManager.logInWithReadPermissions(permissoins)
      .then(async result => {
        if (result.isCancelled) {
          reject({ message: "Login Cancelled" });
        } else {
          const accessData = await AccessToken.getCurrentAccessToken();
          const getData = (params, callback) => {
            const infoRequest = new GraphRequest(params, null, callback);
            new GraphRequestManager().addRequest(infoRequest).start();
          };

          const callback1 = async (error, user) => {
            error && reject(error);
            const callback2 = (error, pic) => {
              error
                ? reject(error)
                : resolve({
                    ...user,
                    profile_pic: pic.data.url,
                    access_token: accessData.accessToken
                  });
            };
            await getData(graphApiFieldsForPic, callback2);
          };
          await getData(graphApiFields, callback1);
        }
      })
      .catch(err => reject(err));
  });
};
