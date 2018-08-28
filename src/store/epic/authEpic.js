

import { Observable } from 'rxjs'
import AuthAction from "../actions/authAction";

import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    // apiKey: "AIzaSyDqPpxlIGjEikoqzvZqB7_-10158KdfxOs",
    // authDomain: "reactreduxtodoappfirebase.firebaseapp.com",
    // databaseURL: "https://reactreduxtodoappfirebase.firebaseio.com",
    // projectId: "reactreduxtodoappfirebase",
    // storageBucket: "",
    // messagingSenderId: "866095779438"
    // ------------------
    apiKey: "AIzaSyB1gw1eULCI51zbkcMTA_Hkp6GG3iP_hGs",
    authDomain: "helios-16b9e.firebaseapp.com",
    databaseURL: "https://helios-16b9e.firebaseio.com",
    projectId: "helios-16b9e",
    storageBucket: "helios-16b9e.appspot.com",
    messagingSenderId: "39257996651"

};
firebase.initializeApp(config);

const ref = firebase.database().ref('/');
const auth = firebase.auth();
// let userData ;

class AuthEpic {

    static createUser = (action$) => {
        let userCreated = false;
        return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    auth.createUserWithEmailAndPassword(payload.email, payload.password)
                        .then((res) => {
                            ref.child(`users/${res.uid}`).set(payload);
                            userCreated = true;
                            // Action Dispatch for reducer to state change , and component render for 
                            // login OK use flages and dispatch at the bottom .map((x)=>{})
                            // alert('User Successfully Created');
                            return { type: AuthAction.CREATE_USER_SUCCESSFULLY }

                        }).catch((err) => {
                            console.log(err)
                            ref.push(err.message)
                            alert(err.message)

                        })
                )
                    .map((x) => {
                        return userCreated ? AuthAction.createUserSuccessfully('Naisr') : { type: null }
                    })
            })
    }

    static loginUser = (action$) => {
        return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    auth.signInWithEmailAndPassword(payload.email, payload.password)
                        .then((res) => {
                            // alert(JSON.stringify(res))
                            return { type: AuthAction.LOGIN_USER_SUCCESSFULLY }
                        }).catch((err) => {
                            alert(err.message)
                            return { type: null };
                        })
                )
                // .map((x)=>{
                //     return { type : AuthAction.LOGIN_USER_SUCCESSFULLY }
                //     // return   authenticate ? AuthAction.loginUserSuccessfully(userData) : {type : null}
                // })
            })
    }
}

export default AuthEpic;