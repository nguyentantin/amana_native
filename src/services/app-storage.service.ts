import { AsyncStorage, YellowBox } from 'react-native'

enum STORAGE_KEY {
  AUTH_INFO = '@Amana_auth_info',
  AUTH_ACCESS_TOKEN = '@Amana_auth_access_token',
}

export class AppStorageService {
  static async getAuthInfo() {
    return await AsyncStorage.getItem(STORAGE_KEY.AUTH_INFO)
  }

  static async setAuthInfo(me: object) {
    return await AsyncStorage.setItem(STORAGE_KEY.AUTH_INFO, JSON.stringify(me))
  }

  static async getAuthAccessToken() {
    return await AsyncStorage.getItem(STORAGE_KEY.AUTH_ACCESS_TOKEN)
  }

  static async setAuthAccessToken(token: string) {
    return await AsyncStorage.setItem(STORAGE_KEY.AUTH_ACCESS_TOKEN, token)
  }

  static async revokeAuth() {
    await AsyncStorage.removeItem(STORAGE_KEY.AUTH_ACCESS_TOKEN)
    await AsyncStorage.removeItem(STORAGE_KEY.AUTH_INFO)
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
