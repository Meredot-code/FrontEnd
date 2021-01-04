import React from "react";

export default function ScooterTable(props) {

    console.log("props -" + props.scooter);

    const scooterList = props.scooter.map((item) =>
        <tr key={item.sc_id}>
            <td>{item.sc_id}&emsp;</td>
            <td>{item.sc_type}&emsp;</td>
            <td>{item.sc_pow}&emsp;</td>
            <td>{item.sc_status === 0 ? 'Charging' : 'Not charging'}&emsp;</td>
            <td>{item.sc_perm === 0 ? 'Denied' : 'Granted'}&emsp;</td>
            <td>{item.sc_location}&emsp;</td>
        </tr>

    );

    return(
        <div>
            <table>
                <tbody>
                <tr style={{borderBottom: "1px solid black"}}>
                    <td>ID&emsp;&emsp;&emsp;</td>
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