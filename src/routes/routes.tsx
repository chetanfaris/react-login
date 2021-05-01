import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';
import { UserContext } from '../providers/userProvider';

interface PrivateRoutesProps {
    children: React.ReactNode;
    path: string;
}

export function PrivateRoute({ children, path }: PrivateRoutesProps): JSX.Element {
    const history = useHistory();
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState<string | null>(null);

    useEffect(() => {
        if (!user) {
            setredirect('/login');
        }
    }, [user]);

    if (redirect) {
        history.replace(redirect);
    }

    return <Route path={path}>{children}</Route>;
}
