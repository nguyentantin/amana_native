import HttpRequest from '../HttpRequest'

interface Credentials {
  email: string,
  password: string
}

class AuthRequest extends HttpRequest {
  login(credentials: Credentials) {
    return this.post('/auth/login', credentials)
  }
}

export default new AuthRequest()
