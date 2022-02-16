import React, {Component} from 'react';
import './LoginPage.css';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../Images/screenshot abc.png';
import inst_logo from '../../Images/instalogo.png';
import fb from '../../Images/fblogo.png';
import app from '../../Images/screenshotapp.png';
import SignIN from '../SignIn/SignIN.js';
import SignUp from '../SignUp/SignUp.js';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true
         }
    }
    changeLogin=()=>{
        if(this.state.isLogin)
            this.setState({isLogin:false});
            else
            this.setState({isLogin:true});
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3} align="left"></Grid>
                    <Grid item xs={2}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="340px"/>
                            </div>
                           
                        </div>
                                      </Grid>
                    <Grid item xs={1}></Grid>
                    <div>
                            <div className="loginpage_rightcomponent">
                               <img className="loginpage_logo" align="center" src={inst_logo} />
                              <div className="loginPage_signin">
                                {
                                    this.state.isLogin ? <SignIN/> : <SignUp/>
                                }
                               
                                <div className="login_ordiv">
                                   <div className="login_dividor"></div>
                                   <div className="login_or">OR</div>
                                   <div className="login_dividor"></div>
                                </div>
                                <div className="login_fb">
                                    <img src={fb} width="25px" style={ {"marginRight":"5px" },{"marginleft":"5px"}}/>Log in with Facebook</div>
                                <div className="login_forgot">Forgot Password?</div>
                            </div>
                            </div>
                            <div className="loginpage_signupoption">
                            {
                                    this.state.isLogin ? 
                                    <div className="loginpage_signin">Don't have an account?<span onClick={this.changeLogin} style={{"fontweight":"bold","color":"#0395F6"}}>Sign up</span>
                                </div> :
                                <div className="loginpage_signup">Have an account?<span onClick={this.changeLogin} style={{"fontweight":"bold","color":"#0395F6"}}>Sign in</span>
                                </div>
                            }
                               
                                
                                </div>
                                <div className="loginPage_download">Get the App.</div>
                                <div className="loginPage_option"><img src={app} width="300px"/>
                                </div>
                            </div>
                
                </Grid>
                </div>
                    );
                    }
}
export default LoginPage;