import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import inst_logo from "../../Images/instalogo.png";
import homes from "../../Images/homes.svg";
import message from "../../Images/message.svg";
import find from "../../Images/find.svg";
import react from "../../Images/love.svg";
import Avatar from '@material-ui/core/Avatar';
import pp from "../../Images/people.png";
import uploadImage from '../../Images/postadd.png';
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="navbar_barContent">
                    <Grid container>
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={3}>
                            <img className="navbar_logo" src={inst_logo} width="140px" />
                        </Grid>
                        <Grid item xs={3}>
                           <input text="text" className="navbar_searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={4} style={{"display":"flex"}}>
                            <img className="navbar_img" src={homes} width="25px"/>
                            <img className="navbar_img" src={message} width="25px" />
                            <img className="navbar_img" src={find} width="25px" />
                            <img className="navbar_img" src={react} width="25px" />
                            <Avatar src={pp} className="navbar_img" style={{"maxWidth":"25px","maxHeight":"25px"}}/> 
                            <Link to="Login"><button className='logout_button'>Logout</button></Link>                           
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
         );
    }
}
 
export default NavBar;