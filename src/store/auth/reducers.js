import {
  LOGIN,
  LOGOUT,
  REQUEST_FACEBOOK_LOGIN_FAILURE,
  REQUEST_FACEBOOK_LOGIN,
  REQUEST_PHONE_NUMBER_LOGIN,
  REQUEST_PHONE_NUMBER_LOGIN_FAILURE
} from "./types";

const initialState = {
  user: {
    auth_token: "",
    created_at: "",
    email: "",
    full_name: "Comingoo",
    gender: "",
    id: "",
    last_login_at: "",
    phone: "",
    profile_picture_url: "",
    updated_at: ""
  },
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    // case REQUEST_FACEBOOK_LOGIN:
    //   return {
    //     ...state,
    //     user: { ...action.payload }
    //   };
    // case REQUEST_FACEBOOK_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     error: action.message
    //   };

    // case REQUEST_PHONE_NUMBER_LOGIN:
    //   return {
    //     ...state,
    //     user: { ...action.payload }
    //   };
    // case REQUEST_PHONE_NUMBER_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     error: action.message
    //   };

    default:
      return state;
  }
};

// export const getUser = state => state.authReducer.user;

export default reducer;
