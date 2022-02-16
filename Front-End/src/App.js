import './App.css';
import Login from './Components/Login/Login.js';
import LoginPage from './Components/LoginPage/LoginPage.js';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/HomePage/Home.js';
import SignUp from './Components/SignUp/SignUp.js';
import Register from './Components/Register/Register.js';
import axios from "axios";

function App() {
  return (
    <div className='App'>
   <Router>
     <Switch>
       <Route path="/login" component={Login}/>
       <Route path="/loginpage" component={LoginPage}/>
       <Route path="/signup" component={SignUp}/>
       <Route path="/register" component={Register}/>
       <Route path="/home" component={Home}/>
     </Switch>
   </Router>
   </div>
         
  );
}

export default App;