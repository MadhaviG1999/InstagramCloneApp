import React, {Component} from 'react';
import "./Post.css";
import Avatar from '@material-ui/core/Avatar';
import postimage from "../../Images/post.png";
import love from "../../Images/love.svg";
import comment from "../../Images/comment.svg";
import share from "../../Images/share.svg";
import save from "../../Images/save.svg";
import edit from "../../Images/edit.svg";

class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            commentList:[]
         }
    }
    componentDidMount(){
        this.getComments();
    }
    getComments=()=>{
        let data=[
            {
                "username":"ASD",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 1"
            },
            {
                "username":"madhu",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"Comment 3"
            },
            {
                "username":"aravi",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"nice"
            },
            {
                "username":"latha",
                "commentId":"1234",
                "timeStamp":"123456",
                "description":"good"
            },
                ];
        this.setState({commentList:data});
      }
    render(){
        return(
            <div className="post_container">
                
                <div className="post_header">
                    <Avatar className="post_image" src=""/>
                    
                    <div className="post_username">{this.props.userName}</div>
                    <div className="post_option"><img src={edit} className="post_option"/></div>
                    
                </div>
                <div>
                    <img src={this.props.postImage} width="615px" height="500px"/>
                </div>
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className="post_reactimage"/>
                        <img src={comment} className="post_reactimage"/>
                        <img src={share} className="post_reactimage"/>
                        <img src={save} align="right" className="post_reactimage"/>
                    </div>
                              
                <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                    {this.props.likes} likes
                </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            index<4?
                            <div className="post_comment">{item.username}: {item.description}</div>:<span></span>
                        ))
    }                        
                    
                    
                
                <input text="text" onKeyPress={this.submitComments} className="post_commentbox" placeholder="Add a comment....."/>
                
            </div>
            </div>
            

        );
    }
}
export default Post;