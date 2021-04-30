import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from './firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = (): void => {
    auth.signInWithPopup(googleProvider)
        .then((res) => {
            // console.log(res.user);
        })
        .catch((error) => {
            // console.log(error.message);
        });
};
