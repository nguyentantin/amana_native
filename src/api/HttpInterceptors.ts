import axios from 'axios'
import { isEmpty } from 'lodash'
import { AppStorageService } from '../services/app-storage.service'
import AppStore from '../store/AppStore'

axios.interceptors.request.use(
  async (config) => {
    AppStore.setLoadingScreen(true)
    const accessToken = await AppStorageService.getAuthAccessToken()

    if (!isEmpty(accessToken)) {
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
      }

      config.headers = Object.assign(config.headers, headers)
    }

    return config
  },
  error => {
    AppStore.setLoadingScreen(false)
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  (response) => {
    AppStore.setLoadingScreen(false)
    return response.data
  },
  (error) => {
    const statusCode = error.response && error.response.status
    switch (statusCode) {
      case 401:
        break
      case 404:
        break
      case 500:
        break
      default:
        break
    }

    AppStore.setLoadingScreen(false)
    return Promise.reject(error.response && error.response.data)
  })
