import React from 'react';

{
    email, password;
}

export default class Auth extends React.Component {
    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
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
                           placeholder="auth name"
                    />
                </div>
            </div>
        )
    }
}