import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core'
import NoteIcons from "./iconButtons"
import DashbordService from "../../services/dashbordservices";
import "../../CSS/DashbordScss/update.scss"

import { Checkbox, Divider } from "@material-ui/core";
const commonUrl="http://fundoonotes.incubation.bridgelabz.com/"
const service = new DashbordService();
export class UpdateNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: "",
      title: "",
      description: "",
      file: "",
      imageUrl: "",
      openDilogBox: false,
      closeDilogBox: true,
      checklistId: "",
     checkList: this.props.data.noteCheckLists
    };
  }
  check = (item, index) => {
   
    const changedItem = {
      itemName: item.itemName,
      status: "close",
      isDeleted: item.isDeleted,
      notesId: item.notesId,
    };
    console.log("changedItem",changedItem)
  
      service
        .UpdateCheckList(
          item.notesId,
          item.id,
          changedItem,
          
        )
        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
   
  };
  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  onBodyTextChange = (e) => {
    this.setState({ description: e.target.value })
  }
  handleCloseDialog = () => {
    this.setState({
      openDilogBox: false,
      closeDilogBox: false
    })
  }
  onClose = () => {
    let requestData = {
      noteId: this.props.id,
      title: (this.state.title === "") ? this.props.title : this.state.title,
      description: (this.state.description === "") ? this.props.description : this.state.description,
      file : (Boolean (this.state.newFile)) ?  this.state.newFile : this.props.imageUrl
    }
    service.UpdateNotes(requestData).then((Response => {
      console.log(Response)
    })).catch((err => {
      console.log(err)
    }))
    this.props.refreshh();
  }
  handleClose = () => { };
  render() {
    console.log("card", this.props.openCard)
    console.log("title", this.props.title)
    console.log("description", this.props.description)
    console.log("id", this.props.id)
    console.log("noteCheckLists", this.props.data.noteCheckLists)
    return (
      <div >
        <div className='dialogContainer'>
          <Dialog
          
            open={this.props.OpenCard}
            onClose={this.props.close()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <div className='dialogField'>
            <div>
            {Boolean(this.props.imageUrl) ? 
              <img src={commonUrl+this.props.imageUrl} style={{ paddingLeft : '10px' , paddingRight : '10px' , paddingTop: '10px',height: '350px' , width: '450px' , marginRight : '10px'}} />
              : undefined
            }
        </div>
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
               <div>
                { (Boolean(this.props.data.noteCheckLists)) ? 
                    this.props.data.noteCheckLists.filter((checklist)=> checklist.status === 'open')
                                                .map((checklist,index)=>{  
                      return(          
                        <div className='checklistFileds'>      
                          <div key={checklist.id}>
                            <Checkbox fontSize='small' size='small'onClick={()=>this.check(checklist,index)} />
                          </div>
                          <div>
                            { checklist.itemName}
                          </div> 
                        </div> 
                      );
                    })                  
                  : undefined                                  
                }
                
              </div> 
              <div className='iconfordialog' >
                <div className='IconsContainer' > <NoteIcons /> </div>
                <Button onClick={this.onClose} style={{ "padding-left": "50px" }} float='right'>Close</Button>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
}
export default UpdateNotes;