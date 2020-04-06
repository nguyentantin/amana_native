import { AsyncStorage, YellowBox } from 'react-native'

enum STORAGE_KEY {
  AUTH_INFO = '@Amana_auth_info',
  AUTH_ACCESS_TOKEN = '@Amana_auth_access_token',
}

export class AppStorageService {

  static async getAuthInfo() {
    try {
      return await AsyncStorage.getItem(STORAGE_KEY.AUTH_INFO)
    } catch (e) {
      throw Error('Error: Get AuthInfo')
    }
  }

  static async setAuthInfo(me: object) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY.AUTH_INFO, JSON.stringify(me))
    } catch (e) {
      throw Error('Error: Set AuthInfo')
    }
  }

  static async getAuthAccessToken() {
    try {
      return await AsyncStorage.getItem(STORAGE_KEY.AUTH_ACCESS_TOKEN)
    } catch (e) {
      throw Error('Error: Get AccessToken')
    }
  }

  static async setAuthAccessToken(token: string) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY.AUTH_ACCESS_TOKEN, token)
    } catch (e) {
      throw Error('Error: Set Auth AccessToken')
    }
  }
}

/**
 * In a Bare React Native project you should use
 * https://github.com/react-native-community/async-storage
 *
 * However, Expo runs AsyncStorage exported from react-native.
 * Just to save application bundle size, we still using this one.
 */
YellowBox.ignoreWarnings(['AsyncStorage has been extracted']);
