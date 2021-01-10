import React from "react";
import './scooterList.scss';

export default function ScooterTable(props) {
    const scooterList = props.scooter.map((item) =>
        <tr className="sc-list__body__table" key={item.sc_id}>
            <td>{item.sc_id}&emsp;</td>
            <td>{item.sc_type}&emsp;</td>
            <td>{item.sc_pow}&emsp;</td>
            <td on>{item.sc_status === 0 ? 'Charging' : 'Not charging'}&emsp;</td>
            <td>{item.sc_perm === 0 ? 'Denied' : 'Granted'}&emsp;</td>
            <td>{item.sc_location}&emsp;</td>
        </tr>
    );

    return(
        <div>
            <table className="sc-list">
                <tbody>
                <tr className="sc-list__head__table-line">
                    <td className="sc-list__head__table-line">ID&emsp;&emsp;&emsp;</td>
                    <td>Type&emsp;&emsp;</td>
                    <td>Charge level&emsp;&emsp;</td>
                    <td>Status&emsp;&emsp;</td>
                    <td>Permission	&emsp;&emsp;</td>
                    <td>Location&emsp;&emsp;</td>
                </tr>
                {scooterList}
                </tbody>
            </table>
        </div>
    )
}