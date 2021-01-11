import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './nm.scss';


export default class NewMassage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="nm">
                    <div className="nm_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />New Massage</a>
                    </div>
                    <div className="nm__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
