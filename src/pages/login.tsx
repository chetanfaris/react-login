import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Divider } from '@material-ui/core';
import { signInWithGoogle } from '../services/firebaseAuth';
import { UserContext } from '../providers/userProvider';
import logo from '../assets/logo.png';
import googleIcon from '../assets/Logo_Google.png';
import facebookIcon from '../assets/Logo_Facebook.png';
import banner from '../assets/banner.png';
import '../styles/login.scss';
import { Messages } from '../localization';

export function Login(): JSX.Element {
    const history = useHistory();
    const user = useContext(UserContext);
    const [redirect, setredirect] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setredirect('/dashboard');
        }
    }, [user]);
    if (redirect) {
        history.replace(redirect);
    }

    return (
        <div>
            <img className="banner" src={banner} alt="banner" />
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" style={{ width: '166px' }} />
                </div>
                <div className="login-container">
                    <div className="login-title">{Messages.loginTitle}</div>
                    <form className="login-form" autoComplete="off">
                        <TextField
                            id="email"
                            className="email-field"
                            label={Messages.emailFieldPlaceholder}
                            variant="outlined"
                        />
                        <TextField
                            id="password"
                            className="password-field"
                            type="password"
                            label={Messages.passwordFieldPlaceholder}
                            variant="outlined"
                        />
                        <Button className="forgot-password" href="#text-buttons">
                            {Messages.forgotPasswordButtonTitle}
                        </Button>
                        <Button className="login-button" color="primary" variant="contained">
                            {Messages.loginButtonTitle}
                        </Button>
                        <div className="or">
                            <Divider className="divider divider-left" />
                            <div>{Messages.loginPageOrTitle}</div>
                            <Divider className="divider divider-right" />
                        </div>
                        <div className="social-buttons">
                            <Button
                                className="google-button"
                                color="primary"
                                variant="outlined"
                                startIcon={<img src={googleIcon} alt="Google icon" />}
                                onClick={signInWithGoogle}>
                                {Messages.googleLoginButtonTitle}
                            </Button>
                            <Button
                                className="facebook-button"
                                color="primary"
                                variant="outlined"
                                startIcon={<img src={facebookIcon} alt="Facebook icon" />}>
                                {Messages.facebookLoginButtonTitle}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
