import React from "react";

export const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
        
        {title && (<h2 class="title">{title}</h2>)}

        {stats.map(statsItem => (
          <li key={statsItem.id} class="item">
            <span class="label">{statsItem.label}</span>
            <span class="percentage">{statsItem.percentage}</span>
          </li>
        ))}

        </section>
    )
}