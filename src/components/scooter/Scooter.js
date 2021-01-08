import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import ScooterTable from './scooterList';
import './scooter.scss';
import { withRouter } from 'react-router-dom';
import {Icon} from "@iconify/react";
import longArrowAltLeft from "@iconify-icons/fa-solid/long-arrow-alt-left";
import Header from "../header/Header";

// const GoBack = ({ history }) => <img src="./images/back.png" onClick={
//     () => history.goBack()} alt="Go back" />;

export default class Scooter extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;
        this.scootersQty = 0;
        this.grantedQty = 0;
        this.deniedQty = 0;
        this.chargingQty = 0;
        this.notChargingQty = 0;

        this.setScooter = this.setScooter.bind(this);
        this.onGetScooter = this.onGetScooter.bind(this);
        this.filterInstantUpdate = this.filterInstantUpdate.bind(this);
    };

    setScooter(scooter) {
        this.scootersQty = 0;
        this.grantedQty = 0;
        this.deniedQty = 0;
        this.chargingQty = 0;
        this.notChargingQty = 0;
        this.props.scooter.forEach((item, i) => {
            this.scootersQty++;
            if(item.sc_status === 1) this.chargingQty++;
            if(item.sc_status === 0 || item.sc_status === 3) this.notChargingQty++;
            if(item.sc_perm === 1) this.grantedQty++;
            if(item.sc_perm === 0) this.deniedQty++;
        });

        this.props.setScooter(scooter);
        //this.props.setFilteredScooter(scooter);
    };

    setFilteredScooter(scooter) {
        this.props.setFilteredScooter(scooter);
    };

    onGetScooter() {
        fetch('http://localhost:5000/api/scooter/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                this.filterUploadData(data)
                this.setScooter(data)
            })
            .then( setTimeout(this.onGetScooter, 1000))
    }

    componentDidMount() {
        this.onGetScooter();
    }

    filterUploadData(data) {
        let filteredData = data;
        if (this.condition === 'Charging') {
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_status === 1) return item;
            });
        }
        if (this.condition === 'Charged') {
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_status === 3) return item;
            });
        }
        if (this.condition === 'Not charged') {
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_status === 0) return item;
            });
        }
        this.setFilteredScooter(filteredData)
    }

    filterInstantUpdate(event) {
        let filteredData = this.props.scooter;
        let value = event.target.value;
        if (event.target.value === 'All') this.condition = null;

        if (value === 'Charging') {
            this.condition = 'Charging';
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_status === 1)
                    return item;
            });
        }
        if (value === 'Charged') {
            this.condition = 'Charged';
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_status === 3)
                    return item;
            });
        }
        if (value === 'Not charged') {
            this.condition = 'Not charged';
            filteredData = this.props.scooter.filter((item) => {
                if(item.sc_perm === 0)
                    return item;
            });
        }
        this.setFilteredScooter(filteredData)
    }

    render() {
        return(
            <div><Header/>
                <div className="sc">
                    <div className="sc_button-beck">
                        <a href="home" role="button"> <Icon icon={longArrowAltLeft} />Scooters</a>
                    </div>
                    <div className="sc__body">
                        <div className="sc__group_filter">
                            <div className="sc_selected-location" >
                                Country: <select className="sc__filter-button">
                                    <option>All</option>
                                    <option>Israel</option>
                                </select>
                                    City:<select className="sc__filter-button">
                                    <option>All</option>
                                    <option>Tel Aviv</option>
                                </select>
                            </div>
                            <div className="sc__group-filter-button">
                                <input className="sc__filter-button" value="All" onClick={this.filterInstantUpdate } type="button"/>
                                <input className="sc__filter-button" value="Charging" onClick={this.filterInstantUpdate } type="button"/>
                                <input className="sc__filter-button"value="Charged" onClick={this.filterInstantUpdate } type="button"/>
                                <input className="sc__filter-button"  value="Not charged" onClick={this.filterInstantUpdate } type="button"/>
                            </div>
                        </div>
                        <div className="sc__group_brief-info">
                            <p className="sc__brief-info">
                                Scooters qty: {this.scootersQty}&emsp;
                                Granted: {this.grantedQty}&emsp;
                                Denied: {this.deniedQty}&emsp;
                                Charging: {this.chargingQty}&emsp;
                                Not charging: {this.notChargingQty}
                            </p>
                        </div>
                        <div className="sc__list">
                            <div className="sc_list-size">
                                <ScooterTable scooter={this.props.filteredscooter}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}