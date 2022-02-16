import React,{ Component } from 'react';
import "./MainPage.css";
import Post from '../Post/Post';
import uploadImage from '../../Images/postadd.png';


class MainPage extends Component{
    constructor(props){
        super(props);
        this.state={uploadImage,
            postArray:[]
         }
    }
    componentDidMount(){
        this.getPost();
    }
    getPost=()=>{//API
        let data=[
            {
                "postId":"123456",
                "userName":"madhavi",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"aravi_123",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"madhu_987",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            },
            {
                "postId":"123456",
                "userName":"Friend_1",
                "postImageURL":"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
                "timeStamp":"12345",
                "likes":"1234"
            }
        ];
        this.setState({postArray:data});

    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({uploadImage: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render(){
        const {uploadImage} = this.state
        return(
            <div>
                
                    <div className="mainpage__container">
                                <div className="fileupload">
                                    <label for="file-upload">
                                        <img className='mainpage__uploadicon' src={uploadImage} height="25px" width="25px"/>
                                    </label>
                                    <input accept="image/*" onChange={this.upload} id="file-upload" alt="" type="file" onChange={this.imageHandler}/>
                                </div>

                            </div>
                            {
                    this.state.postArray.map((item,index)=>(
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes}/>

                    ))
                }               
            </div>
         );

    }
    }
export default MainPage;