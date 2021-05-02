import React, { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/app';
import { auth } from '../services/firebase';
import { getUser } from '../services/cloudFirestore';
import { User } from '../Models/user';

export const UserContext = createContext<void | User | null>(null);

interface UserProviderProps {
    children?: React.ReactNode;
}

export const UserProvider: React.FunctionComponent<UserProviderProps> = ({
    children
}: UserProviderProps): JSX.Element => {
    const [loaded, setLoaded] = useState<boolean | false>(false);
    const [user, setUser] = useState<void | User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser != null) {
                setUser(await getUser(firebaseUser?.email));
            } else {
                setUser(null);
            }
            setLoaded(true);
        });

        return unsubscribe;
    }, []);

    return loaded ? <UserContext.Provider value={user}>{children}</UserContext.Provider> : <></>;
};
