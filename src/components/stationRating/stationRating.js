import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './sr.scss';


export default class StationRating extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="sr">
                    <div className="sr_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Station Rating</a>
                    </div>
                    <div className="sr__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
