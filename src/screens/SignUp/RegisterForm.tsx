import React from 'react'
import { View } from 'react-native'
import { Button, Input } from '@ui-kitten/components'

import styles from './styles'
import { observer } from 'mobx-react'

interface RegisterProps {
  form: any,
  onSubmit: any,
  onChange: any,
}

@observer
class RegisterForm extends React.PureComponent<RegisterProps> {

  onSubmitPress = (): void => {
    // navigation && navigation.navigate('SignIn')
  }

  render(): React.ReactElement {
    const { form, onSubmit, onChange } = this.props
    console.log(form)
    return (
      <View style={styles.formContainer}>
        <Input
          style={styles.textField}
          label='NAME'
          placeholder='Name'
          status='control'
          value={form.name.value}
          onChangeText={text => onChange('name', text)}
        />
        <Input
          style={styles.textField}
          label='EMAIL'
          placeholder='Email'
          status='control'
          onChange={onChange}
        />
        <Input
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder='Password'
          label='PASSWORD'
          status='control'
          onChange={onChange}
        />
        <Input
          style={styles.passwordInput}
          secureTextEntry={true}
          placeholder='Password confirmation'
          label='PASSWORD CONFIRMATION'
          status='control'
          onChange={onChange}
        />
        <Button
          style={styles.submitBtn}
          status='control'
          size='large'
          onPress={onSubmit}>
          SIGN UP
        </Button>
      </View>
    )
  }
}

export default RegisterForm
