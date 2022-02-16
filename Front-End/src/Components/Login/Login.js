import axios from "axios";
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import inst_logo from '../../Images/instalogo.png';

function Login(){
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    try{
      const user = { username, password };
      axios.post("http://localhost:8081/auth",user);
      alert("login successful");
      console.log(user);

    history.push("/Home");
    }catch(error) {
      alert("Something went wrong");
    }
    
  };
  return(
        <div className="loginpage_component">
    <img className="loginpage_logo" align="center" src={inst_logo} alt=""/>
          <div className="login_container">
            <form  className="component" onSubmit={handleForm} method="post">
              <label className="labelstyle">Username  </label>
              <input 
                type="Username" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />

              <br /><br/>
              <label className="labelstyle">Password   </label>
              <input 
                type="password" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />

              <br /><br/>
                <button type="submit" className="login_signInButton">Log In</button><br></br>
                <p>Don't have an account?</p>
                
               <Link to="Register"><button className="login_registerButton">Sign Up</button></Link>
               <br></br>
               
            </form>
          </div>
    </div>
   
  );
}
export default Login;