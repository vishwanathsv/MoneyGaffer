import React, { useEffect, useState } from "react";
import "./incomecss.css";
import axios from "axios";
const apiUrl = 'https://omnireports.azurewebsites.net/api/CRUD_irwb';


  
function FormTable({ addTransaction }) {
  const [data, setData] = useState([]);
  const [incomeTitle, setincomeTitle] = useState("");
  const [savingsAccount, setSavingsAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setincomeTitle(data[index].incomeTitle);
    setSavingsAccount(data[index].savingsAccount);
    setAmount(data[index].amount);
    setDate(data[index].date);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const requestData = {
        "crudtype": 1,
        "recordid": null,
        "collectionname": "income", // Change the collection name to "income"
        "data": {
          "income title": "food",
          "savings Account": "SBI",
          "Amount": "2000",
          "date": "12-09-2023"
        }
      };
      
      await axios.post(apiUrl, requestData)
        .then(response => {
          console.log('API Response:', response.data);
          
        })
        .catch(error => {
          console.error('API Error:', error);
          
        });
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = { incomeTitle, savingsAccount, amount, date };
        setData(updatedData);
        setEditIndex(null);
      } else {
        const newData = { incomeTitle, savingsAccount, amount, date };
        setData([...data, newData]);
      }

      setincomeTitle("");
      setSavingsAccount("");
      setAmount("");
      setDate("");
    }
  
  return (
    <div className="page-container">
      <div className="container">
        <div className="form-container">
          <h2>Income Details</h2>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="incomeTitle">Income Title</label>
          <input
            type="text"
            id="incomeTitle"
            placeholder="Enter Income Title"
            value={incomeTitle}
            onChange={(e) => setincomeTitle(e.target.value)}
          />
        </div>
            <div className="form-group">
              <label>Savings Account</label>
              <select
                value={savingsAccount}
                onChange={(e) => setSavingsAccount(e.target.value)}
              >
                <option value="">Select</option>
                <option value="SBI">SBI</option>
                <option value="HDFC">HDFC</option>
                <option value="Karnataka Bank">Karnataka Bank</option>
                <option value="ICICI">ICICI</option>
                <option value="AXIS">AXIS</option>
                <option value="CANARA">CANARA</option>
                <option value="HDFC">HDFC</option>

              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
        <div className="table-container">
          <h2>Income Data</h2>
          <table>
            <thead>
              <tr>
                <th>Income Title</th>
                <th>Savings Account</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td> {item.incomeTitle}</td>
                  <td>{item.savingsAccount}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <button onClick={() => handleEdit(index)} className="edit">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FormTable;
