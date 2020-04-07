import React from 'react'
import { View } from 'react-native'
import { Button, Input } from '@ui-kitten/components'

import styles from './styles'

interface RegisterProps {
  form: any,
  meta: any,
  onSubmit: any,
  onFieldChange: any,
}

class RegisterForm extends React.PureComponent<RegisterProps> {

  onSubmitPress = (): void => {
    // navigation && navigation.navigate('SignIn')
  }

  render(): React.ReactElement {
    const { form, meta, onSubmit, onFieldChange } = this.props
    return (
      <View style={styles.formContainer}>
        <Input
          style={styles.textField}
          label='NAME'
          placeholder='Name'
          status={form.name.error ? 'danger' : 'control'}
          caption={form.name.error}
          value={form.name.value}
          onChangeText={text => onFieldChange('name', text)}
        />
        <Input
          style={styles.textField}
          label='EMAIL'
          placeholder='Email'
          status={form.email.error ? 'danger' : 'control'}
          caption={form.email.error}
          value={form.email.value}
          onChangeText={text => onFieldChange('email', text)}
        />
        <Input
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder='Password'
          label='PASSWORD'
          status={form.password.error ? 'danger' : 'control'}
          caption={form.password.error}
          value={form.password.value}
          onChangeText={text => onFieldChange('password', text)}
        />
        <Input
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder='Password confirmation'
          label='PASSWORD CONFIRMATION'
          status={form.passwordConfirmation.error ? 'danger' : 'control'}
          caption={form.passwordConfirmation.error}
          value={form.passwordConfirmation.value}
          onChangeText={text => onFieldChange('passwordConfirmation', text)}
        />
        <Button
          style={styles.submitBtn}
          status='control'
          size='large'
          disabled={!meta.isValid}
          onPress={onSubmit}>
          SIGN UP
        </Button>
      </View>
    )
  }
}

export default RegisterForm
