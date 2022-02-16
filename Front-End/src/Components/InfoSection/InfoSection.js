import React,{ Component } from 'react';
import "./InfoSection.css";
import Avatar from '@material-ui/core/Avatar';
import imageSrc from "../../Images/pp1.png";

class InfoSection extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <div className="info_container">
                <Avatar className="info_image" src={imageSrc}/>
                <div className="info_content">
                    <div className="info_username">madhavi_gg</div>
                    <div className="info_description">Description</div>
                </div>
                <div className="info_switch">Switch</div>
                
            </div>
            </div>
           
         );
    }
}
export default InfoSection; 