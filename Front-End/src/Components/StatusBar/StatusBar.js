import React,{ Component } from 'react';
import "./StatusBar.css";
import Avatar from '@material-ui/core/Avatar';
import statusimg from "../../Images/people.png";
class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state={uploadImg:"https://www.citypng.com/public/uploads/preview/-11591396102oojxpyygnw.png",
            statusList: []
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData=()=>{
        let data=[
            
                 {
                     "username":"madhavi_gg",
                     "imageURL":"../../Images/people.png",
                  },
                  {
                     "username":"testing",
                    "imageURL":"../../Images/people.png",
                 },
                 {
                    "username":"abcde",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"fghij",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"klmno",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"pqrst",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"uvwxyz",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"latha_12",
                   "imageURL":"../../Images/people.png",
                },
                {
                    "username":"madhu_123",
                   "imageURL":"../../Images/people.png",
                }

            
        ]
        this.setState({statusList:data});
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({uploadImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render(){
        const {uploadImg} = this.state
        return(
            <div>
                <div className="statusbar_container">
                    <div className="fileupload">
                    <label for="file-upload-status">
                    <img className="statusbar_upload" src={uploadImg} height="80px" width="80px"/>
                    </label>
                    <input id="file-upload-status" accept="image/*" onChange={this.uploadStatus} type="file" onChange={this.imageHandler}/>
                    </div>
                    
                    {
                        this.state.statusList.map((item,index)=>(
                            <div className="status">
                                <Avatar className="statusbar_status" src={statusimg} />
                                <div className="statusbar_text">{item.username}</div>
                            </div>

                        ))
                    }           
            </div>
            </div>
         );
    }
}
 
export default StatusBar;