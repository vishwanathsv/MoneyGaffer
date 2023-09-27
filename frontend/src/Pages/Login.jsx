import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./Login.css";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom";


function Login() {
 
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()
  // axios.defaults.withCredentials=true;
  const handleSubmit= async(e)=>{
    e.preventDefault()
    await axios.post('https://omnireports.azurewebsites.net/api/Login',{
      username : username,
      password : password
    })
    .then(res=>{
        if(res.data.status === "PASS"){
          navigate("/dashboard")
        }
        if(res.data.status === "FAIL"){
          alert("Invalid username and password")
        }
    }).catch(err=>console.log(err))
  }

  return (
    <div className="containerr"  style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100vw", height:"100vh"}}>

    <div className="login-container">
      <div className="bg-white p-3 rounded w-25" >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
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
          <button  type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>
        <p className="mt-3">Don't have an account?</p>
        <Link to="/register" className="btn btn-primary w-100 rounded-0">Signup</Link>
      </div>
    </div>
    </div>

  );
}

export default Login;
