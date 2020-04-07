import React from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from '@ui-kitten/components'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'

import { Image } from '../../constants/Image'

class SignUpScreen extends React.PureComponent {
   onSignInButtonPress = (): void => {
    // navigation && navigation.goBack()
  }

   onSignUpButtonPress = (): void => {
    // navigation && navigation.navigate('SignIn')
  }

  render(): React.ReactElement {
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
              SIGN IN
            </Text>
            <Button
              style={styles.signUpButton}
              appearance='ghost'
              status='control'
              size='giant'
              icon={ArrowForwardIcon}
              onPress={this.onSignUpButtonPress}>
              Sign Up
            </Button>
          </View>

          <View style={styles.formContainer}>
            <Input
              label='EMAIL'
              placeholder='Email'
              status='control'
            />
            <Input
              style={styles.passwordInput}
              secureTextEntry={true}
              placeholder='Password'
              label='PASSWORD'
              status='control'
            />
          </View>
          <Button
            status='control'
            size='large'
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
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

