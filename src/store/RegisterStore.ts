import { action } from 'mobx'
import GenericFormStore from './GenericFormStore'

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
    console.log(this.getModelValues())
  }
}

export { RegisterStore }

export default new RegisterStore()
