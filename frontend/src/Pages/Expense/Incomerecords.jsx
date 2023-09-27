// src/components/IncomeRecords.jsx
import React, { useState } from 'react';
import "./Incomerecords.css";
const Incomerecords = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('salary'); // Default value is 'salary'

  const handleRetrieveDetails = () => {
    // Handle the logic to retrieve income records based on the selected criteria
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Category:', category);
    // Implement the logic to fetch and display income records here
  };

  return (
    <div className="income-records">
      <h2>Income Records</h2>
      <form>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="salary">Salary</option>
            <option value="rental">Rental Income</option>
            <option value="investment">Investment Income</option>
            {/* Add more category options here */}
          </select>
        </div>
        <div className="form-group">
          <button className="retrieve-button" onClick={handleRetrieveDetails}>
            Retrieve Details
          </button>
        </div>
      </form>
      {/* Display the retrieved income records here */}
    </div>
  );
};

export default Incomerecords;
