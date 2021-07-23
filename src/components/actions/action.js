import { google, firebase } from "../firebase/firebaseConfig";
import { types } from "../types/types";

// Login basico Vincula con el Redux
export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id,
            displayName
        }
    }
}

//Vincula con Google en Firebase
export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                console.log("user aca : ", user)
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}

//Registro de email, password y nombre y lo guarda en Firebase
export const registroEmailPasswordNombre = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                console.log(user);
                await user.updateProfile({ displayName: name })
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e => {
                console.log(e);
            })
    }
}

