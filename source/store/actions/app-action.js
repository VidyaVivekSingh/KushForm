import {
  UPDATE_USER_NAME,
  UPDATE_USER_MOBILE,
  UPDATE_USER_EMAIL,
  UPDATE_USER_ADDRESS,
  RESET_STATE,
} from '../constants/constant';

export function updateUserName(name) {
  return {
    type: UPDATE_USER_NAME,
    payload: name,
  };
}

export function updateUserMobile(mobile) {
  return {
    type: UPDATE_USER_MOBILE,
    payload: mobile,
  };
}

export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload: email,
  };
}

export function updateUserAddress(address) {
  return {
    type: UPDATE_USER_ADDRESS,
    payload: address,
  };
}

export function resetState() {
  return {
    type: RESET_STATE,
    payload: null,
  };
}
