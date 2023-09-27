import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./Signup.css";
import axios from "axios"
import {Link,useNavigate} from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const data = {
      "crudtype":1,
      "recordid":null,
      "collectionname":"irwbusers",
      "data":{
          "username": name,
          "password":password,
          "role":"user"     
         }
      
    }
    await axios.post('https://omnireports.azurewebsites.net/api/CRUD_irwb?', data).then(res=>{
      if (res) {
        console.log(res);
        navigate("/login")
      }
        // navigate('/login')
    }).catch(err=>console.log)
  }

  return (
    <div className="containerr"  style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p className="mt-3">Already have an account?</p>
        <Link to="/login" className="btn btn-primary w-100 rounded-0">Login</Link>
      </div>
    </div>
    </div>
  );
}

export default Signup;
