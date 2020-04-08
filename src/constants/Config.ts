import { API_URL } from 'react-native-dotenv'

export const Config = {
  apiUrl: API_URL ? API_URL : 'http://localhost'
}
