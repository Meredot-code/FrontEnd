import React from "react";
import './header.scss';
import logo from '../../media/logo.png';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.name = localStorage.getItem("user");
        this.organisation = localStorage.getItem("org");
    }

    logOut= () => {
        localStorage.setItem("isAuth", null);
        localStorage.setItem("user", null);
        document.location.href="/home";
    }

    render() {
        return(
        <div className="row justify-content-center">
            <div className="col-md-3 brand-container-logo">
                <img src={logo}/>
            </div>
            <div className="col-md-4 brand-container">
                <div className="brand-container-text">
                <p> {this.organisation}: {this.name},
                    <button onClick={this.logOut} className="brand-container-button">
                        log out
                    </button>
                </p>
                <p>Relationship Manager: Roman Bysko (rb@meredot.com)</p>
                <p>Support Manager: Helen Lykova (hl@meredot.com)</p>
                </div>
            </div>
        </div>
    )}
}