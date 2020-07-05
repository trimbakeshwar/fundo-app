import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import "../../CSS/DashbordScss/display.scss";
import NoteIcons from "./iconButtons"
import Masonry from 'react-masonry-css'
import "../../CSS/DashbordScss/trash.scss";
import IconButton from '@material-ui/core/IconButton';
import DashbordService from "../../services/dashbordservices";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import Display from "./displayNotes"
const service = new DashbordService();

export class AllTrashNotes extends Component{
    constructor(props){
                super(props);
                this.state={
                    TrashNotes: [],
                 
                  
                };
                this.getTrashAllNotes()
        
            }
    getTrashAllNotes=()=>{
       service.GetTrashNotes().then((Response=>{
         console.log(Response.data.data.data)
          this.setState({TrashNotes:Response.data.data.data })
       })).catch((err)=>{
           console.log(err)
       });
     
    }
   
    render(){
       
       return(
            <div className="storage">
        <Display data={ this.state.TrashNotes.filter((data)=>data.isDeleted === true) }/>
        </div>
       );
     }
}
export default AllTrashNotes;
