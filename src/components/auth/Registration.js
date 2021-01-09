import React from 'react'

export default class Registration extends React.Component {
    render() {
        return(
            <div>
                <h3>Register Page</h3>
                <div>
                    <input type="text"
                           name = "login"
                           placeholder="auth name"
                    />
                </div>
                <div>
                    <input type="text"
                           name="password"
                           placeholder="password"
                    />
                </div>
                <div>
                    <input type="text"
                           name="repeatpassword"
                           placeholder="repeat password"
                    />
                </div>
            </div>
        )
    }
}