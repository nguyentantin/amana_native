import axios from 'axios'
import { isEmpty } from 'lodash'

axios.interceptors.request.use(
  (config) => {
    const accessToken = ''

    if (!isEmpty(accessToken)) {
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
      }

      config.headers = Object.assign(config.headers, headers)
    }

    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  (response) => {
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

    return Promise.reject(error.response && error.response.data)
  })
