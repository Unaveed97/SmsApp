import React, { Component } from 'react';
import {
  View,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import firebase from 'firebase';
import User from '../Model/User'

console.disableYellowBox = true;

export default class AuthLodingScreen extends Component{
    constructor (props) {
        super(props)
        this._bootstrapAsync()

    }
    
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyDzR2l8i-E2cWi4bqqt-Exx-ZyOmQq4V4Y",
            authDomain: "sms-application-c4c67.firebaseapp.com",
            projectId: "sms-application-c4c67",
            storageBucket: "sms-application-c4c67.appspot.com",
            messagingSenderId: "58947000382",
            appId: "1:58947000382:web:ad42f0186a06182963996f"
          };
          
          firebase.initializeApp(firebaseConfig);
    }

    _bootstrapAsync = async() => {
        User.phone = await AsyncStorage.getItem('UserPhone')
        this.props.navigation.navigate(User.phone ? 'App' : 'Auth')
    }

    render() {
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle= 'default' />
            </View>
        )
    }
}