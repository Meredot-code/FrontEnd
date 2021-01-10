import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './pac.scss';


export default class PowerAndCost extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="pac">
                    <div className="pac_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Power and Cost</a>
                    </div>
                    <div className="pac__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
