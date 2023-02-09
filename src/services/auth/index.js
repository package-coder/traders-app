import { useState } from "react"
import auth from "../../config/firebase"
import * as firebase from 'firebase';

const login = (email, password) => {

    const user = auth
        .signInWithEmailAndPassword(email, password)
    return user
}

const loginWithGoogle = () => {
  
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(({ user }) => {
            alert(user)
        })
        .catch((e) => alert(e))

}



export default {
    login,
    loginWithGoogle
}