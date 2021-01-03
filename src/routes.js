import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import AuthContainer  from './components/AuthContainer';
import StationsConteiner from './components/StationsConteiner';
import Registration from "./components/Registration";

export const  useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" exec>
                        <AuthContainer/>
                    </Route>
                    <Route path="/station" exec>
                        <StationsConteiner/>
                    </Route>
                    <Route path="/scooter" exec>
                        <Registration/>
                    </Route>
                    {/*<Redirect to="/"/>*/}
                </Switch>
            </BrowserRouter>
        )
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exec>
                    <AuthContainer/>
                </Route>
                <Route path="/news" exec>
                    <AuthContainer/>
                </Route>
                <Route path="/count" exec>
                    <AuthContainer/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
    )
}