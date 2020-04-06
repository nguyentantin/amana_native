import { action, observable, set, toJS } from 'mobx'
import Validator from 'validatorjs'

class RegisterStore {
  @observable
  form = {
    name: {
      value: '',
      error: null,
      rule: 'required'
    },
    email: {
      value: '',
      error: null,
      rule: 'required|email'
    },
    password: {
      value: '',
      error: null,
      rule: 'required'
    },
    passwordConfirmation: {
      value: '',
      error: null,
      rule: 'required'
    }
  }

  @observable
  meta = {
    isValid: true,
    error: null
  }

  @action
  onFieldChange = (field: any, value: string) => {
    console.log(field, value)
    set(this.form, field, { value })
    // let { email, password } = this.form
    // const validation = new Validator(
    //   { email: email.value, password: password.value },
    //   { email: email.rule, password: password.rule },
    // )
    // set(this.meta, 'isValid', validation.passes())
    // set(field, 'error', validation.errors.first(field))
  }

  @action
  setError = (errMsg: string) => {
    set(this.meta, 'error', errMsg)
  }

  @action
  onSubmitRegister = () => {
    console.log('submit')
  }

  // getFlattenedValues = (valueKey = 'value') => {
  //   let data = {}
  //   let form = toJS(this.form)
  //   Object.keys(form).map(key => {
  //     data[key] = form[key][valueKey]
  //   });
  //   return data
  // }
}

export default new RegisterStore()
