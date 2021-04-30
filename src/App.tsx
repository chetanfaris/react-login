import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { UserProvider } from './providers/userProvider';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';

export function App(): JSX.Element {
    return (
        <UserProvider>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </UserProvider>
    );
}
