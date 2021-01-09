import React, { Component } from 'react';
import {DropdownButton, Dropdown} from "react-bootstrap";
import Pactable from './pacList';


export default class PowerAndCost extends Component {

    render() {

        return (
            <div>
                <p>Company:PowerMobility</p>
                <hr/>
                Month: <select>
                    <option>All</option>
                    <option>Israel</option>
                </select>

                Year:<select>
                    <option>All</option>
                    <option>Israel</option>
                </select>
                <hr/>
                Country: <select>
                    <option>All</option>
                    <option>Israel</option>
                </select>

                City:<select>
                    <option>All</option>
                    <option>Israel</option>
                </select>
                <hr/>

                <Pactable/>


                <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}
