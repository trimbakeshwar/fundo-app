import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import {TextField} from '@material-ui/core'
import NoteIcons from "./iconButtons"
import DashbordService from "../../services/dashbordservices";
import "../../CSS/DashbordScss/update.scss"
const service = new DashbordService();
export class UpdateNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: "",
      title: "",
      description: "",
      openDilogBox:false,
      closeDilogBox:true
    };
  }
  onTitleChange=(e)=>{
    this.setState({title:e.target.value})
  }
  onBodyTextChange=(e)=>{
    this.setState({description:e.target.value})
  }
  handleCloseDialog=()=>{
this.setState({openDilogBox:false,
    closeDilogBox:false})
  }
  onClose=()=>{
      let requestData={
          noteId:this.props.id,
          title:(this.state.title==="")?this.props.title:this.state.title,
          description:(this.state.description==="")?this.props.description:this.state.description
      }

service.UpdateNotes(requestData).then((Response=>{
        console.log(Response)
       
        
      })).catch((err=>{
        console.log(err)
       
      }))
      this.props.refreshh();
     
  }
  handleClose = () => {};
render() {
    console.log("card",this.props.openCard)
    console.log("Data",this.props.title)
    console.log("Data",this.props.description)
    console.log("id",this.props.id)
    return (
        <div>
          
          <div className='dialogContainer'>
          <Dialog
          
            open ={this.props.OpenCard}
            onClose={this.props.close()}
           
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            
          >
            <div className='dialogField'>
                  <div className='dialogtextsFields'>
                      <TextField
                          className='tittle'
                          multiline
                          placeholder='Title'
                          defaultValue={this.props.title}                            
                          textdecaration='none'
                          InputProps={{ disableUnderline: true }} 
                          onChange={this.onTitleChange} 
                                      
                      />       
                  </div>
                  <div className='dialogtextFields'>
                      <TextField
                          className='takeNote'
                          multiline
                          defaultValue={this.props.description}
                          placeholder='Take a Note'                            
                          textdecaration='none'
                          InputProps={{ disableUnderline: true }} 
                           
                          onChange={this.onBodyTextChange}             
                      />                
                  </div>
                  <div className='iconfordialog' >  
                          <div className='IconsContainer'> <NoteIcons /> </div>
                          <Button onClick={this.onClose} float='right'>Close</Button>
                  </div>
            </div>
          </Dialog>
          </div>
        </div>
      );
  }
}
export default UpdateNotes;