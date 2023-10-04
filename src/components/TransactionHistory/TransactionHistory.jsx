import React from "react";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={css.body}>
                {items.map(item => (
                    <tr key={item.id} className={css.row}>
                        <td className={css.type}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))} 
            </tbody>
        </table>
    )
}