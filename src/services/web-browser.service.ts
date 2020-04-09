import { Linking } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

export class WebBrowserService {
  static openBrowserAsync = async (url: string): Promise<any> => {
    await WebBrowser.openBrowserAsync(url)
  }

  private static openUrl = (url: string): Promise<any> => {
    return Linking.openURL(url)
  }
}
