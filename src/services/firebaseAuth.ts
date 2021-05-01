import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from './firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<firebase.User | null> => {
    return auth.signInWithPopup(googleProvider).then((res) => {
        return res.user;
    });
};

export const logOut = (): void => {
    auth.signOut();
};
