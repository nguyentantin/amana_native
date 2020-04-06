import { action, get, observable, set, toJS } from 'mobx'
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
  onFieldChange = (field: string, value: string) => {
    console.log(field, value)
    const oldValue = toJS(get(this.form, field))
    set(this.form, field, { ...oldValue, value })
    // let { email, password } = this.form
    // const validation = new Validator(
    //   { email: email.value, password: password.value },
    //   { email: email.rule, password: password.rule },
    // )
    // set(this.meta, 'isValid', validation.passes())
    // set(field, 'error', validation.errors.first(field))
    console.log(toJS(this.form))
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

export { RegisterStore }

export default new RegisterStore()
