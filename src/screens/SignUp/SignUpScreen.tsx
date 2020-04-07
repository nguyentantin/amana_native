import React from 'react'
import { View } from 'react-native'
import { Button, Text } from '@ui-kitten/components'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'
import RegisterForm from './RegisterForm'

import { Image } from '../../constants/Image'
import { inject, observer } from 'mobx-react'
import { RegisterStore } from '../../store/RegisterStore'
import { toJS } from 'mobx'

interface SignUpProps {
  registerStore: RegisterStore,
  navigation: any,
}

@inject('registerStore')
@observer
class SignUpScreen extends React.PureComponent<SignUpProps> {
  constructor(props: any) {
    super(props)
  }

  onSignInButtonPress = (): void => {
    const { navigation } = this.props
    navigation.navigate('SignIn')
  }

  render(): React.ReactElement {
    const { registerStore } = this.props
    return (
      <KeyboardAvoidingView>
        <ImageOverlay
          style={styles.container}
          source={Image.background}
        >
          <View style={styles.signInContainer}>
            <Text
              style={styles.signInLabel}
              status='control'
              category='h4'>
              SIGN UP
            </Text>
            <Button
              style={styles.signUpButton}
              appearance='ghost'
              status='control'
              size='giant'
              icon={ArrowForwardIcon}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>

          <RegisterForm
            form={toJS(registerStore.form)}
            meta={toJS(registerStore.meta)}
            onFieldChange={registerStore.onFieldChange}
            onSubmit={registerStore.onSubmitRegister}
          />

          <View style={styles.socialAuthContainer}>
            <Text
              style={styles.socialAuthHintText}
              status='control'>
              Sign with a social account
            </Text>
            <View style={styles.socialAuthButtonsContainer}>
              <Button
                appearance='ghost'
                size='giant'
                status='control'
                icon={GoogleIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='control'
                icon={FacebookIcon}
              />
              <Button
                appearance='ghost'
                size='giant'
                status='control'
                icon={TwitterIcon}
              />
            </View>
          </View>
        </ImageOverlay>
      </KeyboardAvoidingView>
    )
  }
}

export default SignUpScreen

