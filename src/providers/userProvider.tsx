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
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
