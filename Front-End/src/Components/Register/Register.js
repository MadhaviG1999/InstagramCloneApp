import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import inst_logo from '../../Images/instalogo.png';
import { Link } from "react-router-dom";

function Register(){
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    try{
      const user = { username, password };
      axios.post("http://localhost:8081/subs",user);
      alert("User account is created successfully");
      console.log(user);

    history.push("/Login");
    }catch(error) {
      alert("Something went wrong");
    }
    
  };
  return(
    <div className="loginpage_component">
    <img className="loginpage_logo" align="center" src={inst_logo} alt=""/>
          <div className="login_container">
            <form  className="component" onSubmit={handleForm} method="post">
            <label className="labelstyle">Email or Phone  </label>
              <input 
                type="Email" 
                name="email"  
                required={true} 
                autoComplete="off" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />

              <br /><br />
              <label className="labelstyle">Fullname  </label>
              <input 
                type="Fullname" 
                name="fullname" 
                required={true} 
                autoComplete="off" 
                value={fullname} 
                onChange={(e) => setFullname(e.target.value)}
              />

              <br /><br />
              <label className="labelstyle">Username  </label>
              <input 
                type="Username" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
              />

              <br /><br />
              <label className="labelstyle">Password  </label>
              <input 
                type="Password" 
                name="username" 
                required={true} 
                autoComplete="off" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <br /><br />
              <button type="submit" className="login_registerButton">Sign Up</button>
            </form>
          </div>
      </div>
  );
}
export default Register;