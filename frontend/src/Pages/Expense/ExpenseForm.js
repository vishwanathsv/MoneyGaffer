// src/components/ExpenseForm.js
import './ExpenseForm.css'; // Import the CSS file

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import TransactionHistory from './TransactionHistory';
const ExpenseForm = () => {
  const [expenseTitle, setExpenseTitle] = useState('');
  const [savingsType, setSavingsType] = useState(''); // Updated state for selected bank account
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  // Updated state for selected bank account

  const handleSave = async () => {
    if (expenseTitle && savingsType && expenseAmount && expenseDate) {
      const newTransaction = {
        title: expenseTitle,
        amount: parseFloat(expenseAmount),
        date: expenseDate,
        bankAccount, // Include the selected bank account
        id: Date.now(),
      };
      try {
        // Send a POST request to your backend API to save the data
        // const response = await axios.post('http://localhost:5000/api/transactions', newTransaction).then((res) => addTransaction([...addTransaction ,  res.data]))

      } catch (error) {
        console.error('Error saving transaction:', error);
      }

      // addTransaction(newTransaction);

      // Clear form fields after saving
      setExpenseTitle('');
      setSavingsType('');
      setExpenseAmount('');
      setExpenseDate('');
      setBankAccount('');
    } else {
      alert('Please fill in all fields before saving.');
    }
  };

  


  return (
    
    <div className="expense-form" style={{backgroundColor:"white"}}>
      <h2>Add an Expense</h2>
      <form>
        <div className="form-group">
          <label htmlFor="expenseTitle">Expense Title</label>
          <input
            type="text"
            id="expenseTitle"
            placeholder="Enter Expense Title"
            value={expenseTitle}
            onChange={(e) => setExpenseTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="savingsType">Select Bank Account</label>
          <select
            id="savingsType"
            value={savingsType}
            onChange={(e) => {
              setSavingsType(e.target.value);
              setBankAccount(e.target.value);
            }}
          >
            <option value="">Select Bank Account</option>
            <option value="sbi">SBI</option>
            <option value="hdfc">HDFC</option>
            {/* Add other account options here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="expenseAmount">Expense Amount</label>
          <input
            type="number"
            id="expenseAmount"
            placeholder="Enter Expense Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenseDate">Expense Date</label>
          <input
            type="date"
            id="expenseDate"
            placeholder="Select Expense Date"
            value={expenseDate}
            onChange={(e) => setExpenseDate(e.target.value)}
          />
        </div>
        <button className="handle" onClick={handleSave}>
          Save
        </button>
      </form>
      <TransactionHistory />
    </div>
    
  );
};

export default ExpenseForm;