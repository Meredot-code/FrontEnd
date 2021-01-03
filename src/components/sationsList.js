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
    let stations = [];
    let station = { id: '0001', slots: props.stations, loc: 'London' }
    stations.push(station);
    const stationList = stations.map((st) =>
             <tr style={{borderBottom: "1px solid black"}} >
                <td> {st.id} </td>
                <td>
                    {slotListID(st.slots)}
                </td>
                <td>
                    {slotListStatus(st.slots)}
                </td>
                <td>
                    {slotListInfo(st.slots)}
                </td>
                <td>
                    {slotListPow(st.slots)}
                </td>
                <td>{st.loc}</td>
            </tr>
        );

    return(
        <div>
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

            {stationList}
                </tbody>
            </table>
        </div>
    )
}