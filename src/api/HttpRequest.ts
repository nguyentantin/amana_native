import axios from 'axios'
import { Config } from '../constants/Config'
import './HttpInterceptors'

export default class HttpRequest {
  private headers: object
  protected apiURL: string
  protected axios: any
  protected CancelToken: any

  constructor() {
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
    this.apiURL = Config.apiUrl
    this.axios = axios
    this.CancelToken = this.axios.CancelToken
  }

  get(path: string, params: object) {
    const requestUrl = this.apiURL + path
    const requestConfig = params ? {params, headers: this.headers} : {headers: this.headers}
    return this.axios.get(requestUrl, requestConfig)
  }

  post(path: string, data: object) {
    const requestUrl = this.apiURL + path
    return this.axios.post(requestUrl, data, {headers: this.headers})
  }

  put(path: string, data: object) {
    const requestUrl = this.apiURL + path
    return this.axios.put(requestUrl, data, {headers: this.headers})
  }

  patch(path: string, data: object) {
    const requestUrl = this.apiURL + path
    return this.axios.patch(requestUrl, data, {headers: this.headers})
  }

  delete(path: string, params: object) {
    const requestUrl = this.apiURL + path
    const requestConfig = params ? {params, headers: this.headers} : {headers: this.headers}
    return this.axios.delete(requestUrl, requestConfig)
  }

  upload(path: string, data: object) {
    const requestUrl = this.apiURL + path
    const headers = {...this.headers, 'Content-Type': 'multipart/form-data'}

    return this.axios.post(requestUrl, data, {headers})
  }

  custom(config: object) {
    return this.axios(config)
  }

  cancelPost(path: string, data: object, options = {}) {
    const requestUrl = this.apiURL + path
    const source = this.CancelToken.source()

    const request = this.axios.post(requestUrl, data, {
      ...options,
      cancelToken: source.token,
      headers: this.headers
    })

    return {
      request,
      source
    }
  }

  setHeaders(headers: object) {
    this.headers = Object.assign(this.headers, headers)
  }
}
