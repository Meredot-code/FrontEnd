import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import AuthContainer  from './components/auth/AuthContainer';
import StationsConteiner from './components/station/StationsConteiner';
import Home from "./components/home/Home";
import Scooter from "./components/scooter/ScooterConteiner";
import Dashboard from "./components/dashboard/DashboardConteiner";
import PowerAndCost from "./components/powerAndCost/PowerAndCost";
import Auth from "./components/auth/AuthContainer";
import StationRating from './components/stationRating/stationRating';
import BillingHistory from './components/billingHistory/billingHistory';
import NewMassage from './components/newMassage/newMassage';
import IncomingMessage from './components/incomingMessage/incomingMessage';
import OutgoingMessage from './components/outgoingMessage/outgoingMessage';

export const  useRoutes = (isAuthenticated) => {
    if(true) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" exec>
                        <Home/>
                    </Route>
                    <Route path="/auth" exec>
                        <AuthContainer/>
                    </Route>
                    <Route path="/st" exec>
                        <StationsConteiner/>
                    </Route>
                    <Route path="/sc" exec>
                        <Scooter/>
                    </Route>
                    <Route path="/db" exec>
                        <Dashboard/>
                    </Route>
                    <Route path="/pac" exec>
                        <PowerAndCost/>
                    </Route>
                    <Route path="/sr" exec>
                        <StationRating/>
                    </Route>
                    <Route path="/bh" exec>
                        <BillingHistory/>
                    </Route>
                    <Route path="/nm" exec>
                        <NewMassage/>
                    </Route>
                    <Route path="/im" exec>
                        <IncomingMessage/>
                    </Route>
                    <Route path="/om" exec>
                        <OutgoingMessage/>
                    </Route>

                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" exec>
                    <Auth/>
                </Route>
                <Redirect to="/auth"/>
            </Switch>
        </BrowserRouter>
    )
}