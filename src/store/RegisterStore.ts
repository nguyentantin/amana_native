import { action, get, observable, set, toJS } from 'mobx'
import validate from 'validate.js'
import _ from 'lodash'

class RegisterStore {
  @observable
  form = {
    name: {
      value: null,
      error: null,
      rule: {
        presence: {
          allowEmpty: false
        },
        length: {
          minimum: 6,
          maximum: 100,
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
          attribute: "password",
        }
      }
    }
  }

  @observable
  meta = {
    isValid: false,
    error: null
  }

  @action
  onFieldChange = (field: string, value: string) => {
    const oldValue = toJS(get(this.form, field))
    set(this.form, field, { ...oldValue, value })
    const data = this.getFlattenedValues('value')
    const rule = this.getFlattenedValues('rule')
    const validation = validate(data, rule)
    set(this.meta, 'isValid', validation === undefined)
    const currentValidation = _.get(validation, field)
    if (currentValidation !== undefined) {
      const err = _.head(currentValidation)
      set(this.form, field, _.merge(get(this.form, field), { error: err }))
    } else {
      set(this.form, field, _.merge(get(this.form, field), { error: null }))
    }
  }

  @action
  setError = (errMsg: string) => {
    set(this.meta, 'error', errMsg)
  }

  @action
  onSubmitRegister = () => {
    console.log('submit, call api register')
    console.log(toJS(this.form))
  }

  getFlattenedValues = (valueKey = 'value') => {
    let data = {}
    let form = toJS(this.form)
    Object.keys(form).map(key => {
      const parent = get(this.form, key)
      const value = get(parent, valueKey)
      const tmp = { [key]: toJS(value) }
      Object.assign(data, tmp)
    });
    return data
  }
}

export { RegisterStore }

export default new RegisterStore()
