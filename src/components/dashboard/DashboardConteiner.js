import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import { setDashboard } from '../../store/Dashboard/actions';
import "leaflet/dist/leaflet.css";

class DashboardConteiner extends React.Component {

    render() {
        return(
            <Dashboard dashboard={this.props.dashboard}
                     setDashboard={this.props.setDashboard}
            />
        )
    }
}

const mapStateToProps = state => {
    return{
        dashboard: state.dashboard.dashboard
    };
};

const mapDispatchToProps = {
    setDashboard: setDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardConteiner);