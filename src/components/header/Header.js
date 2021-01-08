import React from "react";
import './header.scss';
import logo from '../../media/logo.png';

export default class Header extends React.Component {
    render() {
        console.log(logo);
        return(
        <div className="row justify-content-center">
            <div className="col-md-5 brand-container">
                <img src={logo}/>

            </div>
            <div className="col-md-5 brand-container">
                <p style={{marginBottom: 0}}>PowerMobility: Daniel, log out</p>
                <p style={{marginBottom: 0}}>Relationship Manager: Roman Bysko (rb@meredot.com)</p>
                <p style={{marginBottom: 0}}>Support Manager: Helen Lykova (hl@meredot.com)</p>

            </div>
        </div>
    )}
}