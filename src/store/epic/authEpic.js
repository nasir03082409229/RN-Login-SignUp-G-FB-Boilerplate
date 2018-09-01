

import { Observable } from 'rxjs'
import AuthAction from "../actions/authAction";

import * as firebase from 'firebase';
// Initialize Firebase
var config = {
   

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
                            // console.log(err)
                            alert(err.message)
                            return { type: null };
                            

                        })
                )
                    // .map((x) => {
                    //     return userCreated ? AuthAction.createUserSuccessfully('Naisr') : { type: null }
                    // })
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