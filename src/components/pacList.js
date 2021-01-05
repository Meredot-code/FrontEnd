import React from "react";

const list = [{id: 11, date: 11, type: 11, power: 11, time: 11, price: 1}];

export default function pacTable() {
    const pacList = list.map((item) =>
        <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.type}</td>
            <td>{item.power}</td>
            <td>{item.time}</td>
            <td>{item.price}</td>
        </tr>

    );
    return(
        <table>
            <tbody>
            <tr>
                <td>ID&emsp;</td>
                <td>DATE&emsp;</td>
                <td>TYPE&emsp;</td>
                <td>POWER&emsp;</td>
                <td>TIME&emsp;</td>
                <td>PRICE&emsp;</td>
            </tr>

            {pacList}
            </tbody>
        </table>
    )
}