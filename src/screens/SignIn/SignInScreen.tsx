import React from 'react'
import { View } from 'react-native'
import { Button, Input, Text } from '@ui-kitten/components'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'

import { Image } from '../../constants/Image'
import { inject, observer } from 'mobx-react'
import { action, observable, set, toJS } from 'mobx'
import AuthRequest from '../../api/Request/AuthRequest'
import { AppStorageService } from '../../services/app-storage.service'

interface SignInScreenProps {
  navigation: any,
  appStore: any
}

@inject('appStore')
@observer
class SignInScreen extends React.PureComponent<SignInScreenProps> {
  @observable isSubmit = false

  @observable input = {
    email: '',
    password: '',
  }

  @action onChangeText(field: string, value: string) {
    set(this.input, field, value)
  }

  @action onSubmit() {
    const {appStore} = this.props

    AuthRequest
      .login(toJS(this.input))
      .then(async (response: any) => {
        await AppStorageService.setAuthAccessToken(response.accessToken)
        await AppStorageService.setAuthInfo(response.user)
        // navigation.navigate('Home')
        appStore.setIsAuthenticated(true)
        appStore.setAuthInfo(response.user)
      })
  }

  constructor(props: any) {
    super(props)

    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSignUpPress = () => {
    const { navigation } = this.props
    navigation.navigate('SignUp')
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
              onPress={this.onSignUpPress}
            >
              Sign Up
            </Button>
          </View>

          <View style={styles.formContainer}>
            <Input
              label='EMAIL'
              placeholder='Email'
              status='control'
              value={this.input.email}
              onChangeText={(text) => this.onChangeText('email', text)}
            />
            <Input
              style={styles.passwordInput}
              secureTextEntry={true}
              placeholder='Password'
              label='PASSWORD'
              status='control'
              value={this.input.password}
              onChangeText={(text) => this.onChangeText('password', text)}
            />
          </View>
          <Button
            status='control'
            size='large'
            onPress={this.onSubmit}
          >
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

export default SignInScreen
