import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import AuthContainer  from './components/auth/AuthContainer';
import StationsConteiner from './components/station/StationsConteiner';
import Registration from "./components/Registration";
import Home from "./components/home/Home";
import Scooter from "./components/scooter/ScooterConteiner";
import Dashboard from "./components/dashboard/DashboardConteiner";
import PowerAndCost from "./components/PowerAndCost";
import Auth from "./components/auth/AuthContainer"


export const  useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
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