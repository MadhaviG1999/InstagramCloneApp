import React,{ Component } from 'react';
import "./Suggestions.css";
import Avatar from '@material-ui/core/Avatar';
import imageSrc from "../../Images/smiley.png";
import imageSrc1 from "../../Images/image1.png";
import imageSrc2 from "../../Images/image2.png";
import imageSrc3 from "../../Images/image3.png";
import imageSrc4 from "../../Images/image4.jpg";
import imageSrc5 from "../../Images/image5.png";


class Suggestions extends Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state=>({
            isToggleOn: !state.isToggleOn
        }));
    }
    render(){
        return(
            <div>
                <div className="suggestions_container">
                    <div className="suggestions_header">
                        <div>Suggestions For You</div>
                    </div>
                        <div className="suggestions_body">
                            <div className="suggestions_friends">
                            <Avatar src={imageSrc} className="suggestions_image"/>
                            <div className="suggestions_username">Friend_1</div>
                            <div className="suggestions_follow">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Follow" : "Following"}</button></div>
                       </div>
                       <div className="suggestions_friends">
                            <Avatar src={imageSrc2} className="suggestions_image"/>
                            <div className="suggestions_username">aravi_123</div>
                            <div className="suggestions_fol">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Follow" : "Following"}</button></div>
                       </div>
                       <div className="suggestions_friends">
                            <Avatar src={imageSrc3} className="suggestions_image"/>
                            <div className="suggestions_username">madhu_987</div>
                            <div className="suggestions_folow">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Unfollow" : "Follow"}</button></div>
                       </div>
                       <div className="suggestions_friends">
                            <Avatar src={imageSrc1} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                            <div className="suggestions_foll">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Unfollow" : "Follow"}</button></div>
                       </div>
                       <div className="suggestions_friends">
                            <Avatar src={imageSrc4} className="suggestions_image"/>
                            <div className="suggestions_username">like_and_share</div>
                            <div className="suggestions_fo">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Following" : "Unfollow"}</button></div>
                       </div>
                       <div className="suggestions_friends">
                            <Avatar src={imageSrc5} className="suggestions_image"/>
                            <div className="suggestions_username">subscribe_r</div>
                            <div className="suggestions_f">
                                <button style={{color:"skyblue",backgroundColor:"white",border:"white"}} onClick={this.handleClick}>
                                {this.state.isToggleOn ? "Following" : "Unfollow"}</button></div>
                       </div>
                  </div>
                </div>
            </div>
           
         );
    }
}
export default Suggestions; 