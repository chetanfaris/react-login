import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../providers/userProvider';
import { logOut } from '../services/firebaseAuth';

export function Dashboard(): JSX.Element {
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState<string | null>(null);

    return (
        <div className="dashboard">
            <h1 className="dashboard-text">Welcome Home</h1>
            <button type="button" className="logout-button" onClick={logOut}>
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/google-logo.png"
                    alt="google icon"
                />
                <span> logout</span>
            </button>
        </div>
    );
}
