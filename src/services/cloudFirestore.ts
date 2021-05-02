import firebase from 'firebase/app';
import { User, UserConverter } from '../Models/user';
import { firestore } from './firebase';

export const getUser = async (email?: string | null | undefined): Promise<void | User | null> => {
    if (!email) {
        return null;
    }
    return firestore
        .collection('users')
        .where('email_id', '==', email)
        .withConverter(UserConverter)
        .get()
        .then((doc: firebase.firestore.QuerySnapshot<User>) => {
            if (doc.size === 0 || doc.size > 1) {
                return null;
            }
            return doc.docs[0].data();
        });
};
