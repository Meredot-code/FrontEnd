import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './im.scss';


export default class IncomingMessage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="im">
                    <div className="im_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Incoming Message</a>
                    </div>
                    <div className="im__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
