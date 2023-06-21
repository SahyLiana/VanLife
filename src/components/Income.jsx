import React from "react";
import graphIncome from "../assets/income-graph.png";
import "../styles/income.css";

function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <div className="income-container">
      <h1 style={{ fontSize: "40px" }}>Income</h1>
      <p style={{ color: "gray", fontSize: "20px" }}>
        Last{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          30 days
        </span>
      </p>
      <h1 style={{ fontSize: "45px" }}>$2,260</h1>
      <img src={graphIncome} />
      <h2 style={{ fontSize: "30px" }}>
        Your transactions ({transactionsData.length})
      </h2>
      <p style={{ color: "gray", fontSize: "20px" }}>
        Last{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          30 days
        </span>
      </p>

      {transactionsData.map((data) => (
        <div key={data.id} className="income-card">
          <h1>${data.amount}</h1>
          <p>{data.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Income;
