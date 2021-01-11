import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './om.scss';


export default class OutgoingMessage extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="om">
                    <div className="om_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Outgoing Message</a>
                    </div>
                    <div className="om__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
