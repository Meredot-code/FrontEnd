import React from 'react';
import lodashClonedeep from 'lodash.clonedeep';
import StationTable from './sationsList';

export default class Stations extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.occupiedQty = 0;
        this.outOfWork = 0;

        this.setStation = this.setStation.bind(this);
        this.onGetStation = this.onGetStation.bind(this);
        this.filterInstantUpdate = this.filterInstantUpdate.bind(this);
    };

    setStation(station) {
        this.props.setStation(station);
    };

    setFilteredStation(station) {
        this.props.setFilteredStations(station);
    };

    countParameterStation(data) {
        let newData = JSON.parse(JSON.stringify(data));
        this.stationQty = 0;
        this.slotQty = 0;
        this.availableQty = 0;
        this.occupiedQty = 0;
        this.outOfWork = 0;

        newData.forEach((item) => {
            this.stationQty++;
            if(item.arr_slots.length > 0) this.slotQty += item.arr_slots.length
            item.arr_slots.forEach(slot => {
                if(slot.slot_status === 0) this.availableQty++;
                if(slot.slot_status === 1) this.occupiedQty++;
                if(slot.slot_status > 3) this.outOfWork++;
            })
        });
    };

    onGetStation() {
        fetch('http://localhost:5000/api/station/all')
            .then(response => {
                if (!response.ok) {
                    console.log('error');
                }
                return response.json();
            })
            .then((data) => {
                if(data.length > 0) {
                    this.setStation(lodashClonedeep(data))
                    this.filterUploadData(lodashClonedeep(data))
                    this.countParameterStation(data)
                }
            })
            .then( setTimeout(this.onGetStation, 1000))
    }

    componentDidMount() {
        this.onGetStation();
    }

    filterUploadData(data) {
        let filteredData = data;
        let filteredSlot = [];
        if (this.condition === 'Occupied') {
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status === 1)
                        return slot;
                })
                item.arr_slots = filteredSlot;
                return item;
            });
        }
        if (this.condition === 'Available') {
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status === 0)
                        return slot;
                })
                item.arr_slots = filteredSlot;
                return item;
            });
        }
        if (this.condition === 'Offline') {
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status > 3)
                        return slot;
                })
                item.arr_slots = filteredSlot;
                return item;
            });
        }
        this.setFilteredStation(filteredData)
    }

    filterInstantUpdate(event) {

        let filteredData = this.props.station;
        let filteredSlot = [];
        let value = event.target.value;
        if (value === 'All') this.condition = null;
        if (value === 'Occupied') {
            this.condition = 'Occupied';
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status === 1)
                        return slot;
                    })
                item.arr_slots = filteredSlot;
                return item;
            });
        }
        if (value === 'Available') {
            this.condition = 'Available';
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status === 0)
                        return slot;
                })
                item.arr_slots = filteredSlot;
                return item;
            });
        }
        if (value === 'Offline') {
            this.condition = 'Offline';
            filteredData = this.props.station.filter((item) => {
                filteredSlot = item.arr_slots.filter(slot => {
                    if(slot.slot_status > 3)
                        return slot;
                })
                item.arr_slots = filteredSlot;
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
                        Available pads:  { this.availableQty }&emsp;
                        Occupied pads:  { this.occupiedQty }&emsp;
                        Out of work:   { this.outOfWork }
                    </p>


                    <StationTable stations={this.props.filteredstation} />
                </div>
            </div>
        )
    }
}