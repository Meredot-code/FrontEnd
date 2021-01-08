import React from 'react';
import './auth.scss';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogIn = this.onLogIn.bind(this);
    }

    onEmailChange(event) {
        this.props.setEmailText(event.target.value)
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }

    onLogIn() {
        console.log("LOGIN");
    }

    render() {
        return(
            <div className="auth-container">
                <div className="auth-container-input">
                    <p className="auth-container-input">Name: <input type="text"
                               name = "login"
                               placeholder="Auth name"
                               value={this.props.email}
                               onChange={this.onEmailChange}
                            />
                    </p>
                </div>
                <div className="auth-container-input">
                    <p className="auth-container-input">Password:
                        <input type="password"
                           name="password"
                           placeholder="Password"
                           value = {this.props.password}
                           onChange={this.onPasswordChange}
                        />
                    </p>
                </div>
                <div>
                    <button className="auth-container-button" onClick={this.onLogIn}>Log In</button>
                </div>
            </div>
        )
    }
}