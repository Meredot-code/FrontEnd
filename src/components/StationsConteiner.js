import React from 'react';
import {connect} from 'react-redux';
import Station from './Stations';
import { setStation, setFilteredStations } from '../store/Station/actions';

class StationsConteiner extends React.Component {

    render() {
        return(
            <Station station={this.props.station}
                     filteredstation={this.props.filteredstation}
                     setStation={this.props.setStation}
                     setFilteredStations={this.props.setFilteredStations}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        station: state.station.station,
        filteredstation: state.station.filteredstation
    };
};

const mapDispatchToProps = {
    setStation: setStation,
    setFilteredStations
};

export default connect(mapStateToProps, mapDispatchToProps)(StationsConteiner);