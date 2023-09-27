// src/components/Expenserecords.jsx
import React, { useState } from 'react';
import "./Expenserecords.css"
const Expenserecords = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [category, setCategory] = useState('food'); // Default value is 'food'

  const handleRetrieveDetails = () => {
    // Handle the logic to retrieve expense records based on the selected criteria
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Category:', category);
    // Implement the logic to fetch and display expense records here
  };

  return (
    <div className="expense-records">
      <h2>Expense Records</h2>
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
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="rent">Rent</option>
            {/* Add more category options here */}
          </select>
        </div>
        <div className="form-group">
          <button className="retrieve-button" onClick={handleRetrieveDetails}>
            Retrieve Details
          </button>
        </div>
      </form>
      {/* Display the retrieved expense records here */}
    </div>
  );
};

export default Expenserecords;
