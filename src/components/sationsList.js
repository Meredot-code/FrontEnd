import React from "react";

const slotListID = (list) => list.map((item) => {
    if(true){
        return(
            <tr key={item.slot_id}>
                <td>{item.slot_id}&emsp;</td>
            </tr>
        )}
    }
);

const slotListStatus =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_status === 1 ? "OC":"AVA"}&emsp;</td>
    </tr>
);

const slotListInfo =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_status < 4 ? "Online":"Offline"}&emsp;</td>
    </tr>
);
const slotListPow =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td>{item.slot_power}&emsp;</td>
    </tr>
);

export default function StationTable(props) {
    const stationList = props.stations.map((st) =>
         <tr style={{borderBottom: "1px solid black"}} >
            <td> {st.st_id} </td>
            <td>
                {slotListID(st.arr_slots)}
            </td>
            <td>
                {slotListStatus(st.arr_slots)}
            </td>
            <td>
                {slotListInfo(st.arr_slots)}
            </td>
            <td>
                {slotListPow(st.arr_slots)}
            </td>
            <td>{st.location}</td>
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