import React, {Component} from 'react';
import { map } from 'underscore';
import './home.scss';
import Header from "../header/Header";

export default class Home extends Component {

    render () {
        const {
            title
        } = this.props;

        const NAVIGATION = [
            { id: 1, title: 'home', href: '/home'},
            { id: 2, title: 'auth', href: '/auth'},
            { id: 3, title: 'stations', href: '/st'},
            { id: 4, title: 'scooters', href: '/sc'},
        ];

        return (
            <div>
                <Header/>
                <div className='header-body'>
                    {/*<div>*/}
                    {/*    <h1>POWER MOBILITY</h1>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    {map(NAVIGATION, ({ title, href}) => (*/}
                    {/*        <a href = {href}>*/}
                    {/*            <button>*/}
                    {/*                <span> {title} </span>*/}
                    {/*            </button>*/}
                    {/*        </a>*/}
                    {/*    ))}*/}

                    {/*</div>*/}

                    <div className="main-nav-rom row justify-content-center">
                        <div className="col-auto">
                            <div><p className="main-nav-bar">MAIN MENU</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item-menu"><a href="db" role="button">Dashboard</a></li>
                                    <li className="nav-item-menu"><a href="st" role="button">Stations</a></li>
                                    <li className="nav-item-menu"><a href="sc" role="button">Scooters</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div><p className="main-nav-bar">REPORTS</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item-menu"><a href="pac" role="button">Power and Cost</a></li>
                                    <li className="nav-item-menu"><a href="station-rating-usage.html" role="button">Station
                                        Rating</a></li>
                                    <li className="nav-item-menu"><a href="billing.html" role="button">Billing &amp; History</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div><p className="main-nav-bar">MAIL</p>
                                <ul className="nav flex-column">
                                    <li className="nav-item-menu"><a href="messages-new.html" role="button">New Massage</a></li>
                                    <li className="nav-item-menu"><a href="messages-incoming.html" role="button">Incoming
                                        Message</a></li>
                                    <li className="nav-item-menu"><a href="messages-outgoing.html" role="button">Outgoing
                                        Message</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}