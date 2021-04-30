import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signInWithGoogle } from '../services/firebaseAuth';
import { UserContext } from '../providers/userProvider';

export function Login(): JSX.Element {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setredirect('/dashboard');
        }
    }, [user]);
    if (redirect) {
        <Redirect to={redirect} />;
    }
    return (
        <div className="login-buttons">
            <button type="button" className="login-provider-button" onClick={signInWithGoogle}>
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                    alt="google icon"
                />
                <span> Continue with Google</span>
            </button>
        </div>
    );
}
