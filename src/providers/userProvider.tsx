import React, { useState, useEffect, createContext } from 'react';
import firebase from 'firebase/app';
import { auth } from '../services/firebase';

export const UserContext = createContext<firebase.User | null>(null);

interface UserProviderProps {
    children?: React.ReactNode;
}

export const UserProvider: React.FunctionComponent<UserProviderProps> = ({
    children
}: UserProviderProps): JSX.Element => {
    const [loaded, setLoaded] = useState<boolean | false>(false);
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
            setLoaded(true);
        });

        return unsubscribe;
    }, []);

    return loaded ? <UserContext.Provider value={user}>{children}</UserContext.Provider> : <></>;
};
