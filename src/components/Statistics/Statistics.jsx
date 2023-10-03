import React from "react";
import css from './Statistics.module.css';
import { getRandomColor } from '../random-color';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        
        {title && (<h2 className={css.title}>{title}</h2>)}

        <ul className={css.list}>
        {stats.map(statsItem => (
          <li key={statsItem.id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{statsItem.label}</span>
            <span className={css.percentage}>{statsItem.percentage}%</span>
          </li>
        ))}
        </ul>

        </section>
    )
}