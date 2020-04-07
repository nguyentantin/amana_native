import { action, get, observable, set, toJS } from 'mobx'
import validate from 'validate.js'
import _ from 'lodash'

abstract class GenericFormStore {
  @observable
  form: object

  @observable
  meta: object

  constructor() {
    this.form = {}
    this.meta = {
      isValid: false,
      error: null
    }
    this.initialFormModel()
  }

  abstract initialFormModel(): void

  protected getFlattenedValues = (valueKey = 'value') => {
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
  getModelValues = () => {
    return _.mapValues(this.form, (item) => {
      return _.get(item, 'value')
    })
  }
}

export default GenericFormStore
