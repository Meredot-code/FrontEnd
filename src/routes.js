import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import AuthContainer  from './components/AuthContainer';
import StationsConteiner from './components/StationsConteiner';
import Registration from "./components/Registration";
import Home from "./components/Home";
import Scooter from "./components/ScooterConteiner";

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
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exec>
                    <AuthContainer/>
                </Route>
                <Route path="/st" exec>
                    <AuthContainer/>
                </Route>
                <Route path="/sc" exec>
                    <AuthContainer/>
                </Route>
                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
    )
}