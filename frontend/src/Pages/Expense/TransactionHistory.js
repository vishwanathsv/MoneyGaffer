// src/components/TransactionHistory.js
import React from 'react';
import './TransactionHistory.css'

const TransactionHistory = () => {
  // const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Expense Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Bank Account</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.bankAccount}</td>
              <td>{transaction.date}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <div className="total-amount">
        {/* <strong>Total Amount:</strong> ${totalAmount.toFixed(2)} */}
      </div>
    </div>
  );
};

export default TransactionHistory;
