import {AsyncStorage} from 'react-native';

export const saveUserInfo = async userInfo => {
  try {
    AsyncStorage.removeItem('userName');
    await AsyncStorage.setItem('userName', userInfo.userName);

    AsyncStorage.removeItem('userEmail');
    await AsyncStorage.setItem('userEmail', userInfo.userEmail);

    AsyncStorage.removeItem('userImage');
    await AsyncStorage.setItem('userImage', userInfo.userImage);

    AsyncStorage.removeItem('userMobile');
    await AsyncStorage.setItem('userMobile', userInfo.userMobile);

    AsyncStorage.removeItem('userLocation');
    await AsyncStorage.setItem('userLocation', userInfo.userLocation);

    AsyncStorage.removeItem('userAddress');
    await AsyncStorage.setItem('userAddress', userInfo.userAddress);

    return true;
  } catch (ex) {
    return false;
  }
};

export const getUserName = async () => {
  const userName = await AsyncStorage.getItem('userName');
  return userName;
};

export const getUserImage = async () => {
  const userImage = await AsyncStorage.getItem('userImage');
  return userImage;
};

export const getUserEmail = async () => {
  const userEmail = await AsyncStorage.getItem('userEmail');
  return userEmail;
};

export const getUserPhone = async () => {
  const userMobile = await AsyncStorage.getItem('userMobile');
  return userMobile;
};

export const getUserLocation = async () => {
  const userLocation = await AsyncStorage.getItem('userLocation');
  return userLocation;
};
