import React from "react";
import './stationList.scss';

const slotListID = (list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td className="Station-list__body__table-line-into">{item.slot_id}&emsp;</td>
    </tr>
);

const slotListStatus =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td className="Station-list__body__table-line-into">{item.slot_status === 1 ? "OC":"AVA"}&emsp;</td>
    </tr>
);

const slotListInfo =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td className="Station-list__body__table-line-into">{item.slot_status < 4 ? "Online":"Offline"}&emsp;</td>
    </tr>
);
const slotListPow =(list) => list.map((item) =>
    <tr key={item.slot_id}>
        <td className="Station-list__body__table-line-into">{item.slot_power}&emsp;</td>
    </tr>
);

export default function StationTable(props) {
    const stationList = props.stations.map((st) =>
         <tr style={{borderBottom: "1px solid black"}} >
            <td className="Station-list__body__table-line-into"> {st.st_id} </td>
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
        <div className="Station-list">
            <table className="Station-list__body__table">
                <tbody>
                <tr style={{borderBottom: "1px solid black", fontWeight:"bold"}}>
                    <td className="Station-list__body__table-line">ID&emsp;&emsp;&emsp;</td>
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