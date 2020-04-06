import React from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from '@ui-kitten/components'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'

import { Image } from '../../constants/Image'

export default ({ navigation }: any): React.ReactElement => {
  const [email, setEmail] = React.useState<string>()
  const [password, setPassword] = React.useState<string>()

  const onSignInButtonPress = (): void => {
    // navigation && navigation.goBack()
  }

  const onSignUpButtonPress = (): void => {
    // navigation && navigation.navigate('SignIn')
  }

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
            onPress={onSignUpButtonPress}>
            Sign Up
          </Button>
        </View>

        <View style={styles.formContainer}>
          <Input
            label='EMAIL'
            placeholder='Email'
            status='control'
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder='Password'
            label='PASSWORD'
            status='control'
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          status='control'
          size='large'
          onPress={onSignInButtonPress}>
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
              size='large'
              status='control'
              icon={GoogleIcon}
            >Google Login</Button>
          </View>
        </View>
      </ImageOverlay>
    </KeyboardAvoidingView>
  )
}
