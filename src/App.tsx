import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './providers/userProvider';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { PrivateRoute } from './routes/routes';

export function App(): JSX.Element {
    return (
        <UserProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/">
                            <Dashboard />
                        </PrivateRoute>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </UserProvider>
    );
}
