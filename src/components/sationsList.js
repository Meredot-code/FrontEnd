import React from "react";

const slotListID = (list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_id}&emsp;</td>
    </tr>
);

const slotListStatus =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_status}&emsp;</td>
    </tr>
);

const slotListInfo =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_status === 0 ? "OC":"AVA"}&emsp;</td>
    </tr>
);
const slotListPow =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_power}&emsp;</td>
    </tr>
);

export default function StationTable(props) {
    const stations = props.stations;
    const stationList = (stations) => {
        if(stations.length < 10) {
            let stId = "001";
            return (
            <tr style={{borderBottom: "1px solid black"}} >
                <td> {stId} </td>
                <td>
                    {slotListID(stations)}
                </td>
                <td>
                    {slotListStatus(stations)}
                </td>
                <td>
                    {slotListInfo(stations)}
                </td>
                <td>
                    {slotListPow(stations)}
                </td>
                <td>LONDON</td>
            </tr>
        )}
    };

    return(
        <table>
            <tbody>
            <tr style={{borderBottom: "1px solid black"}}>
                <td>id&emsp;&emsp;&emsp;</td>
                <td>Pad ID&emsp;&emsp;</td>
                <td>Status&emsp;&emsp;</td>
                <td>Info&emsp;&emsp;</td>
                <td>Charge level&emsp;&emsp;</td>
                <td>Location&emsp;&emsp;</td>
            </tr>

        {stationList(stations)}
            </tbody>
        </table>
    )
}