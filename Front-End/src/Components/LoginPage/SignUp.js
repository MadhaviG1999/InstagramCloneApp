import React, {Component} from 'react';
import "../SignUp/SignUp.css";
import {Link} from "react-router-dom";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <input className="loginpage_text" type="text" placeholder="Mobile Number or Email"/>
                <input className="loginpage_text" type="text" placeholder="Full Name"/>
                <input className="loginpage_text" type="text" placeholder="Username"/>
                <input className="loginpage_text" type="password" placeholder=" Password"/>
                <Link to="Home"><button className="login_button">Sign up</button></Link>
            </div>
        );
    }
}
export default SignUp;