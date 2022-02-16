import React, {Component} from 'react';
import "../LoginPage/LoginPage.css";
import {Link} from "react-router-dom";

class SignIN extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <input className="loginpage_text" type="text" placeholder=" Phone number, username, or email"/>
                <input className="loginpage_text" type="password" placeholder=" Password"/>
                <Link to="Home"><button className="login_button">Log In</button></Link>
            </div>
        );
    }
}
export default SignIN;