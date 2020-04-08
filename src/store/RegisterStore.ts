import { action, toJS } from 'mobx'
import GenericFormStore from './GenericFormStore'
import AuthRequest from '../api/Request/AuthRequest'
import { RegisterInterface } from '../api/interface/register.interface'
import { Alert } from 'react-native'
import _ from 'lodash'
import { navigate } from '../navigations'

class RegisterStore extends GenericFormStore {
  initialFormModel() {
    this.form = {
      name: {
        value: null,
        error: null,
        rule: {
          presence: {
            allowEmpty: false
          },
          length: {
            minimum: 6,
            maximum: 100
          }
        }
      },
      email: {
        value: null,
        error: null,
        rule: {
          presence: {
            allowEmpty: false
          },
          email: true
        }
      },
      password: {
        value: null,
        error: null,
        rule: {
          presence: {
            allowEmpty: false
          }
        }
      },
      passwordConfirmation: {
        value: null,
        error: null,
        rule: {
          presence: {
            allowEmpty: false
          },
          equality: {
            attribute: 'password'
          }
        }
      }
    }
  }

  @action
  onSubmitRegister = () => {
    console.log('submit, call api register')
    const params = <RegisterInterface>this.getModelValues()
    AuthRequest.register(params)
      .then((data: any) => {
        console.log(data) // temp log, just pass warning data
        Alert.alert('Success', 'Register success')
        this.initialFormModel()
        navigate('SignIn')
      })
      .catch((err: any) => {
        console.log(err)
        const statusCode = _.get(err, 'statusCode')
        let msg = 'Server Internal Error'
        if (statusCode === 422) {
          const errorResponse = _.get(err, 'error')
          this.parseErrorFromServer(errorResponse)
          msg = 'Validation error, please check again'
        }
        this.setError(false, msg)
        Alert.alert('Error', msg)
      })
  }
}

export { RegisterStore }

export default new RegisterStore()
