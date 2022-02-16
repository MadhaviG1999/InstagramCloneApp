import React, {Component} from 'react';
import "../HomePage/Home.css"
import NavBar from '../NavBar/NavBar.js';
import MainContent from '../MainContent/MainContent.js';
class Home extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div align="left">
             <NavBar/>
             <MainContent/>
            </div>
        );
    }
}
export default Home;