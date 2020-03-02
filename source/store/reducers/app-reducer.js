import {
  UPDATE_USER_NAME,
  UPDATE_USER_MOBILE,
  UPDATE_USER_EMAIL,
  UPDATE_USER_ADDRESS,
  RESET_STATE,
} from '../constants/constant';

const initialState = {
  userName: '',
  userEmail: '',
  userImgURL: '',
  userPhone: '',
  userAddress: {
    latitude: '',
    longitude: '',
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        count: action.payload,
      };
    case UPDATE_USER_MOBILE:
      return {
        ...state,
        count: action.payload,
      };
    case UPDATE_USER_EMAIL:
      return {
        ...state,
        count: action.payload,
      };
    case UPDATE_USER_ADDRESS:
      return {
        ...state,
        count: action.payload,
      };
    case RESET_STATE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default appReducer;
