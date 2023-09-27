import "./App.css";
import { useState } from 'react'
import Signup from "./Pages/Signup"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login  from './Pages/Login';
import Dashboard from './Pages/sidebar/Dashboard';
import Income from './Pages/sidebar/Income';
import Messages from './Pages/sidebar/Messages';
import Analytics from './Pages/sidebar/Analytics';
import FileManager from './Pages/sidebar/FileManager';
import Order from './Pages/sidebar/Order';
import Saved from './Pages/sidebar/Saved';
import Setting from './Pages/sidebar/Settings/ProfilePage';
import Records from './Pages/sidebar/Records';
import Home from "./Pages/Home"
import SideBar from "./components/Sidebar/SideBar"
import ExpenseForm from "./Pages/Expense/ExpenseForm";
import Expenserecords from "./Pages/Expense/Expenserecords";
import Incomerecords from "./Pages/Expense/Incomerecords";
import ProfilePage from "./Pages/sidebar/Settings/ProfilePage";

function App() {        
  return(
   <Router>
      <Routes>
        
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        </Routes>
        <SideBar>
        <Routes>
        <Route path="/" element={<home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/messages" element={<ExpenseForm />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/file-manager" element={<FileManager />} />
        <Route path="/order" element={<Order />} />
        <Route path="/saved" element={<Saved />} />
        {/* <Route path="/settings" element={<Setting />} /> */}
        <Route path="/settings/profile" element={<ProfilePage/>} />

        <Route path="/Records" element={<Records/>}> </Route>
        <Route path="*" element={<> not found</>} />
        <Route path="/expenserecords" element={<Expenserecords/>} />
        <Route path="/incomerecords" element={<Incomerecords/>} />

        </Routes>
      </SideBar>
      
   </Router>

  )
  
}
export default App