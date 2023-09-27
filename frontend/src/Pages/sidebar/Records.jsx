// src/components/RecordsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Records.css' 
const Records = () => {
  return (
    <div className="records-page">
      <h1>Records</h1>
      <div className="buttons">
        <Link to="/Expenserecords" className="button">
          Expense Records
        </Link>
        <Link to="/Incomerecords" className="button">
          Income Records
        </Link>
      </div>
    </div>
  );
};

export default Records;
