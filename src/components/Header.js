import React from "react";

export default class Header extends React.Component {
    render() {
        return <div
            style={{ textAlign: 'end',
            margin: "20px"}}
        >
            <p style={{marginBottom: 0}}>'PowerMobility: Daniel, log out</p>
            <p style={{marginBottom: 0}}>Relationship Manager: Roman Bysko (rb@meredot.com)</p>
            <p style={{marginBottom: 0}}>Support Manager: Helen Lykova (hl@meredot.com)'</p>

        </div>;
    }
}