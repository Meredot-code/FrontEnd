import React from 'react';
import lodashClonedeep from 'lodash.clonedeep';
import MapsContainer from '../Map';
import "leaflet/dist/leaflet.css";
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import './dashboard.scss';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.occupiedQty = 0;
        this.outOfWork = 0;

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
        this.outOfWork = 0;

        data.forEach((item) => {
            this.stationQty++;
            if(item.arr_slots.length > 0) this.slotQty += item.arr_slots.length
            item.arr_slots.forEach(slot => {
                if(slot.slot_status === 0) this.availableQty++;
                if(slot.slot_status === 1) this.occupiedQty++;
                if(slot.slot_status > 3) this.outOfWork++;
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

    componentDidMount() {
        this.onGetDashboard();
    }

    render() {
        return(
            <div className="db">

                <div className="db_button-beck">
                    <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Dashboard</a>
                </div>

                <div className="db__body">
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"/>
                    <div>
                        <p>Station qty:  { this.stationQty }&emsp;</p>
                        <p>    Pad qty:  { this.slotQty }&emsp;</p>
                            <p> Available pads:  { this.availableQty }&emsp;</p>
                                <p> Occupied pads:  { this.occupiedQty }&emsp;</p>
                            <p>Out of work:   { this.outOfWork }     </p>


                        {/*<StationTable stations={this.props.dashboard} />*/}
                    </div>
                    <div>
                    <MapsContainer/>
                    </div>
                    <p>XXXX</p>
                </div>
            </div>
        )
    }
}