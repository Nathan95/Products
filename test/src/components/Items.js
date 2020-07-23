import React, { Component, useState } from "react";
import "../scss/Items.scss";

const Items = ({ rows, loading }) => {
  let transactions = rows || [];

  return (
    <React.Fragment>
      {transactions
        .sort((a, b) => a.amount.value - b.amount.value)
        .slice(0, 10)
        .map(row => (
          <div className="Rtable Rtable--5cols" key={row.id}>
            <div className="Rtable-cell">
              <div className="title">Date</div>
              <span>{row.date}</span>
            </div>
            <div className="Rtable-cell">
              <div className="title">Amount</div>
              <span>{row.amount.value}</span>
            </div>
            <div className="Rtable-cell">
              <div className="title">Category</div>
              <span>{row.category_title}</span>
            </div>
            <div className="Rtable-cell">
              <div className="title">Description</div>
              <span>{row.description}</span>
            </div>
          </div>
        ))}
    </React.Fragment>
  );
};

export default Items;
