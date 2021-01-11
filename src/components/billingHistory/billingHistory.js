import React, { Component } from 'react';
import Header from "../header/Header";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './bh.scss';


export default class BillingHistory extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div className="bh">
                    <div className="bh_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Billing & History</a>
                    </div>
                    <div className="bh__head">
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
