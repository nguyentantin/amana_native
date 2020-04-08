import React from 'react'
import { Alert, View } from 'react-native'
import { Button, Input, Text } from '@ui-kitten/components'
import validate from 'validate.js'
import _ from 'lodash'

import styles from './styles'
import { ImageOverlay } from '../../components/ImageOverlay'
import { ArrowForwardIcon, FacebookIcon, GoogleIcon, TwitterIcon } from '../../components/Icon'
import { KeyboardAvoidingView } from '../../components/KeyboardAvoidingView'

import { Image } from '../../constants/Image'
import { inject, observer } from 'mobx-react'
import { action, get, observable, set, toJS } from 'mobx'
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

  @observable isValid = false

  @observable input = {
    email: '',
    password: ''
  }

  @observable error = {
    email: '',
    password: ''
  }

  private validateRules = {
    email: {
      presence: {
        allowEmpty: false
      },
      email: true
    },
    password: {
      presence: {
        allowEmpty: false
      }
    }
  }

  @action onChangeText(field: string, value: string) {
    set(this.input, field, value)
    const validation = validate(this.input, this.validateRules)
    set(this, 'isValid', validation === undefined)
    const fieldValidate = _.get(validation, field)
    const fieldMsg = (fieldValidate !== undefined) ? _.head(fieldValidate) : null
    set(this.error, field, fieldMsg)
  }

  @action onSubmit() {
    const { appStore } = this.props

    AuthRequest
      .login(toJS(this.input))
      .then(async (response: any) => {
        await AppStorageService.setAuthAccessToken(response.accessToken)
        await AppStorageService.setAuthInfo(response.user)
        // navigation.navigate('Home')
        appStore.setIsAuthenticated(true)
        await appStore.setAuthInfo(response.user)
      })
      .catch((err: any) => {
        const statusCode = _.get(err, 'statusCode')
        let msg = 'Server Internal Error'
        if (statusCode === 422) {
          const errorResponse = _.get(err, 'error')
          _.forEach(errorResponse, (item, key) => {
            const errMsg = _.head(item)
            set(this.error, key, errMsg)
          })
          msg = 'Validation error, please check again'
        }
        if (statusCode === 400) {
          msg = _.get(err, 'error.message')
        }

        Alert.alert('Error', msg)
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
              status={this.error.email ? 'danger' : 'control'}
              caption={this.error.email}
              value={this.input.email}
              onChangeText={(text) => this.onChangeText('email', text)}
            />
            <Input
              style={styles.passwordInput}
              secureTextEntry={true}
              placeholder='Password'
              label='PASSWORD'
              status={this.error.password ? 'danger' : 'control'}
              caption={this.error.password}
              value={this.input.password}
              onChangeText={(text) => this.onChangeText('password', text)}
            />
          </View>
          <Button
            status='control'
            size='large'
            disabled={!this.isValid}
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
