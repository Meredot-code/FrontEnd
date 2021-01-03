import React from 'react';
import StationTable from './sationsList';

export default class Stations extends React.Component {
    constructor(props) {
        super(props);

        this.condition = null;

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
        if (this.condition === 'f2') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 0) return item;
            });
        }
        if (this.condition === 'f3') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 1) return item;
            });
        }
        if (this.condition === 'f4') {
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 1) return item;
            });
        }
        this.setFilteredStation(filteredData)
    }

    filterInstantUpdate(event) {

        let filteredData = this.props.station;
        let value = event.target.value;
        if (event.target.value === 'All') this.condition = null;
        if (value === 'f2') {
            this.condition = 'f2';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 0)
                    return item;
            });
        }
        if (value === 'f3') {
            this.condition = 'f3';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 1)
                    return item;
            });
        }
        if (value === 'f4') {
            this.condition = 'f4';
            filteredData = this.props.station.filter((item) => {
                if(item.slot_status === 3)
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
                    {/*<button onClick={this.onGetStation}>GET DATA</button>*/}
                    <input value="All" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="f2" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="f3" onClick={this.filterInstantUpdate } type="button"/>
                    <input value="f4" onClick={this.filterInstantUpdate } type="button"/>

                    <StationTable stations={this.props.filteredstation} />
                </div>
            </div>
        )
    }
}