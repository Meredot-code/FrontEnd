import React from "react";

export default function SlotTable(props) {
    const stations = props.stations;
    const stationList = stations.map((item) =>
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.status}</td>
            <td>{item.info}</td>
            <td>{item.pow}</td>
        </tr>

    );
    return(
        <table>
            <tbody>
            <tr>
                <td>id&emsp;</td>
                <td>Pad ID&emsp;</td>
                <td>Status&emsp;</td>
                <td>Charge level&emsp;</td>
            </tr>

            {stationList}
            </tbody>
        </table>
    )
}