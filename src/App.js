import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDGpXU_CHvo3MHkbj9KapbkCJWqotL4TWo",
            authDomain: "auth-pjbelo.firebaseapp.com",
            databaseURL: "https://auth-pjbelo.firebaseio.com",
            projectId: "auth-pjbelo",
            storageBucket: "auth-pjbelo.appspot.com",
            messagingSenderId: "810708015168"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication!" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
