import HttpRequest from '../HttpRequest'
import { RegisterInterface } from '../interface/register.interface'

interface Credentials {
  email: string,
  password: string
}

class AuthRequest extends HttpRequest {
  login(credentials: Credentials) {
    return this.post('/auth/login', credentials)
  }

  register(user: RegisterInterface): Promise<any> {
    return this.post('/auth/register', user)
  }
}

export default new AuthRequest()
