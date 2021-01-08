import React from 'react';
import lodashClonedeep from 'lodash.clonedeep';
import MapsContainer from '../Map';
import "leaflet/dist/leaflet.css";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './dashboard.scss';
import Header from "../header/Header";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.occupiedQty = 0;
        this.scooterQty = 0;

        this.setDashboard = this.setDashboard.bind(this);
        this.onGetDashboard = this.onGetDashboard.bind(this);
    };

    setDashboard(dashboard) {
        this.props.setDashboard(dashboard);
    };

    countParameterStation(data) {
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.occupiedQty = 0;

        data.forEach((item) => {
            this.stationQty++;
            if(item.arr_slots.length > 0) this.slotQty += item.arr_slots.length
            item.arr_slots.forEach(slot => {
                if(slot.slot_status === 0) this.availableQty++;
                if(slot.slot_status !== 0) this.occupiedQty++;
            })
        });
    };

    onGetDashboard() {
        fetch('http://localhost:5000/api/station/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                if(data.length > 0) {
                    this.setDashboard(lodashClonedeep(data))
                    this.countParameterStation(data)
                }
            })
            .then( setTimeout(this.onGetDashboard, 1000))
    }

    getScooter() {
        fetch('http://localhost:5000/api/scooter/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                this.scooterQty = data.length;
            })
    }

    componentDidMount() {
        this.onGetDashboard();
        this.getScooter();
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="db">
                    <div className="db_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Dashboard</a>
                    </div>
                    <div className="db__head">
                        <div className="db__body">
                            <div className="row">
                                <div className="col-md mb-2 db_ticket">
                                    <p>Stations:  { this.stationQty }&emsp;</p>
                                    <p className="db_ticket_info">{ this.stationQty }</p>
                                    <p className="db_ticket_info-name">ONLINE</p>
                                </div>
                                <div className="col-md mb-2 db_ticket">
                                    <p>Slots:  { this.slotQty }&emsp;</p>
                                    <p className="db_ticket_info">{ this.availableQty }</p>
                                    <p className="db_ticket_info-name">AVAILABLE</p>
                                </div>
                                <div className="col-md mb-2 db_ticket">
                                    <p> Scooters:  { this.scooterQty}&emsp;</p>
                                    <p className="db_ticket_info">{ this.occupiedQty}</p>
                                    <p className="db_ticket_info-name">ON CHARGE</p>
                                </div>
                                <div className="col-md mb-2 db_ticket">
                                    <p> Balance: </p>
                                    <p className="db_ticket_info">100$</p>
                                    <p className="db_ticket_info-name">END 24/06/21</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="db_map">
                                    <p>Popular Station</p>
                                </div>
                                <div className="db_map">
                                    <p>Map</p>
                                    <MapsContainer/>
                                </div>
                            </div>
                            <p>Stations</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}