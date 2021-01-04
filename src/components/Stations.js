import React from 'react';
import StationTable from './sationsList';

export default class Stations extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.deniedQty = 0;
        this.chargingQty = 0;
        this.notChargingQty = 0;

        this.setStation = this.setStation.bind(this);
        this.onGetStation = this.onGetStation.bind(this);
        this.filterInstantUpdate = this.filterInstantUpdate.bind(this);
    };

    setStation(station) {

        this.stationQty = 0;
        this.slotQty = 0;
        this.occupiedQty = 0;
        this.deniedQty = 0;
        this.chargingQty = 0;
        this.notChargingQty = 0;
        this.props.station.forEach((item, i) => {
            this.slotQty++;
            if(item.slot_status === 0) this.occupiedQty++;
            if(item.slot_status === 1) this.availableQty++;
        });


        this.props.setStation(station);
    };

    setFilteredStation(station) {
        this.props.setFilteredStations(station);
    };

    onGetStation() {
        fetch('http://localhost:5000/api/slot/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                this.filterUploadData(data)
                this.setStation(data)
            })
            .then( setTimeout(this.onGetStation, 6000))
    }

    componentDidMount() {
        this.onGetStation();
    }

    filterUploadData(data) {
        let filteredData = data;
        if (this.condition === 'Occupied') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 0) return item;
            });
        }
        if (this.condition === 'Available') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status > 0) return item;
            });
        }
        if (this.condition === 'Offline') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 1) return item;
            });
        }
        this.setFilteredStation(filteredData)
    }

    filterInstantUpdate(event) {

        let filteredData = this.props.station;
        let value = event.target.value;
        if (value === 'All') this.condition = null;
        if (value === 'Occupied') {
            this.condition = 'Occupied';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 0)
                    return item;
            });
        }
        if (value === 'Available') {
            this.condition = 'Available';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 1)
                    return item;
            });
        }
        if (value === 'Offline') {
            this.condition = 'Offline';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status > 4)
                    return item;
            });
        }

        this.setFilteredStation(filteredData)
    }

    render() {
        return(
            <div>
                <h3>Station Page</h3>
                <div>
                    <input value="All" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="Occupied" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="Available" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="Offline" onClick={this.filterInstantUpdate } type="button"/>

                    <p>Station qty:  { this.stationQty }&emsp;
                        Pad qty:  { this.slotQty }&emsp;
                        Occupied pads:  { this.occupiedQty }&emsp;
                        Available pads:  { this.availableQty }
                    </p>


                    <StationTable stations={this.props.filteredstation} />
                </div>
            </div>
        )
    }
}