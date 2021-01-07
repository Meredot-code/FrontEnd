import React from 'react';
import {connect} from 'react-redux';
import {setScooter, setFilteredScooter} from '../../store/Scooter/actions';
import Scooter from "./Scooter";

class ScooterContainer extends React.Component {

    render() {
        return(
            <Scooter scooter={this.props.scooter}
                     filteredscooter={this.props.filteredscooter}
                     setScooter={this.props.setScooter}
                     setFilteredScooter={this.props.setFilteredScooter}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        scooter: state.scooter.scooter,
        filteredscooter: state.scooter.filteredscooter
    };
};

const mapDispatchToProps = {
    setScooter,
    setFilteredScooter
};

export default connect(mapStateToProps, mapDispatchToProps)(ScooterContainer);