import React, { Component } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    TextInput
} from 'react-native'
import firebase from 'react-native-firebase'

export default class PhoneAuth extends Component {
    state = {
        phone: '',
        confirmResult: null,
        verificationCode: '',
        userId: ''
    }

    validatePhoneNumber = () => {
        var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
        return regexp.test(this.state.phone)
    }


    handleSendCode = () => {
        // Request to send OTP
        if (this.validatePhoneNumber()) {
            firebase
                .auth()
                .signInWithPhoneNumber(this.state.phone)
                .then(confirmResult => {
                    this.setState({ confirmResult })
                })
                .catch(error => {
                    alert(error.message)

                    console.log(error)
                })
        } else {
            alert('Invalid Phone Number')
        }
        this.setState({ confirmResult: null, verificationCode: '' })

    }


    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
