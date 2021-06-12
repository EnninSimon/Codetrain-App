import firebase from '../../firebase/firebase';
import {  ToastAndroid } from 'react-native';

export function createEmailAccount(email, password) {
    function showToast() {
        ToastAndroid.show('You have successfully signed in!', ToastAndroid.SHORT);
      }
    return async (dispatch) => {
        try {
            const user = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
            dispatch(loggedIn(user))
            showToast()
            console.log(user)
        } catch (error) {
            console.log(error)
            dispatch(registerError(error.message))
        }
    }
}


export function loginEmailAccount(email, password) {
    return async (dispatch) => {
        try {
            const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                console.log(user)
            dispatch(loggedIn(user))
        } catch (error) {
            console.log(error)
            dispatch(loginError(error.message))
        }
    }
}


export function logout() {
    return async (dispatch) => {
        try {
            await firebase.auth().signOut()
            dispatch(loggedOut())
        } catch (error) {
            console.log(error)
        }
    }
}





function loggedIn(user) {
    return {
        type: "LOGGED_IN",
        payload: user
    }
}


function loggedOut() {
    return {
        type: "LOGGED_OUT",
    }
}

export function registerError(error){
    return {
        type: "REGISTER_ERROR",
        payload: error
    }
}


export function loginError(error){
    return {
        type: "LOGIN_ERROR",
        payload: error
    }
}