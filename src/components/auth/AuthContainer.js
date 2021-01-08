import React from 'react';
import {connect} from 'react-redux';
import Auth from './Auth';
import {setEmailText, setPasswordText, setAuthenticate} from '../../store/Auth/actions';

class AuthContainer extends React.Component {

    render() {
        return(
            <Auth isauth={this.props.isauth}
                email={this.props.email}
                  password={this.props.password}
                  setEmailText={this.props.setEmailText}
                  setPasswordText={this.props.setPasswordText}
                  setAuthenticate={this.props.setAuthenticate}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        isauth: state.auth.isauth
    };
};

const mapDispatchToProps = {
    setEmailText: setEmailText,
    setPasswordText: setPasswordText,
    setAuthenticate: setAuthenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);