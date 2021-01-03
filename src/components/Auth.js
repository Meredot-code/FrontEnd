import React from 'react';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event) {
        this.props.setEmailText(event.target.value)
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }

    render() {
        return(
            <div>
                <h3>Auth Page</h3>
                <div>
                    <input type="text"
                           name = "login"
                           placeholder="auth name"
                           value={this.props.email}
                           onChange={this.onEmailChange}
                    />
                </div>
                <div>
                    <input type="text"
                           name="password"
                           placeholder="password name"
                           value = {this.props.password}
                           onChange={this.onPasswordChange}
                    />
                </div>
            </div>
        )
    }
}