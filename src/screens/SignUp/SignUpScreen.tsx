import React from 'react'
import { View } from 'react-native'
import { Button, Text } from '@ui-kitten/components'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'
import RegisterForm from './RegisterForm';

import { Image } from '../../constants/Image'
import { inject } from 'mobx-react';

interface SignUpProps {
  registerStore: any,
}

@inject('registerStore')
class SignUpScreen extends React.PureComponent<SignUpProps> {
  onSignInButtonPress = (): void => {
    // navigation && navigation.goBack()
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
            form={registerStore.form}
            onChange={registerStore.onFieldChange}
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

