import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";
import { TextField } from '@material-ui/core'
import NoteIcons from "./iconButtons"
import DashbordService from "../../services/dashbordservices";
import "../../CSS/DashbordScss/update.scss"
import ClearIcon from '@material-ui/icons/Clear';
import { Checkbox } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import {
  Avatar
} from "@material-ui/core";
const commonUrl = "http://fundoonotes.incubation.bridgelabz.com/"
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
      collaboraterData: "",
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
    this.props.refreshh();
  };
  uncheck = (item, index) => {
    const changedItem = {
      itemName: item.itemName,
      status: "open",
      isDeleted: item.isDeleted,
      notesId: item.notesId,
    };
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
    this.props.refreshh();
  };
  deleteItem = (Item) => {
    service.RemoveItem(
      Item.notesId,
      Item.id,
    )
      .then((json) => {
        console.log(json);
      });
    this.props.refreshh();
  }
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
      collaborators: this.state.collaboraterData,
      file: (Boolean(this.state.file)) ? this.state.file : ""
    }
    console.log("updated data", requestData)
    service.UpdateNotes(requestData).then((Response => {
      console.log(Response)
    })).catch((err => {
      console.log(err)
    }))
    this.props.refreshh();
  }
  handleClose = () => { };
  render() {
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
                  <img src={commonUrl + this.props.imageUrl} style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px', height: '350px', width: '450px', marginRight: '10px' }} />
                  : undefined
                }
              </div>
              <div>
                {(this.state.file != "") ?
                  <img
                    src={`${URL.createObjectURL(this.state.file)}`}
                    alt="Curently image is not available"
                    width="600px"
                    height="500px"
                    style={{ paddingTop: "10px" }}
                  />
                  : ""
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
              <div className='displaychecklistSetting'>
                {(Boolean(this.props.data.noteCheckLists)) ?
                  this.props.data.noteCheckLists.filter((checklist) => checklist.status === 'open')
                    .map((checklist, index) => {
                      return (
                        <div className='displayListItem'>
                          <div key={checklist.id}>
                            <Checkbox fontSize='small' size='small' onClick={() => this.check(checklist)} style={{ color: 'black' }} />
                          </div>
                          <div style={{ paddingTop: "7px" }}>
                            {checklist.itemName}
                          </div>
                          <div style={{ paddingTop: "7px" }}>
                            <ClearIcon fontSize="small" onClick={() => this.deleteItem(checklist, index)} />
                          </div>
                        </div>
                      );
                    })
                  : undefined
                }
                {(Boolean(this.props.data.noteCheckLists)) ?
                  this.props.data.noteCheckLists.filter((checklist) => checklist.status === 'close')
                    .map((checklist, index) => {
                      console.log("checklist", checklist);
                      return (
                        <div className='displayListItem'>
                          <div key={checklist.id}>
                            <Checkbox fontSize='small' size='small' onClick={() => this.uncheck(checklist)} style={{ color: 'black' }} />
                          </div>
                          <div style={{ paddingTop: "7px" }} textDecorationLine='line-through'>
                            {checklist.itemName}
                          </div>
                          <div style={{ paddingTop: "7px" }} >
                            <ClearIcon fontSize="small" onClick={() => this.deleteItem(checklist, index)} />
                          </div>
                        </div>
                      );
                    })
                  : undefined
                }
                <div className='colaboratersContainer'>
                  {
                    (Boolean(this.props.data.collaborators)) ?
                      this.props.data.collaborators.map((colabData, index) => {
                        return (
                          <div style={{ paddingLeft: "15px" }}>
                            <Tooltip title={colabData.email} placement="bottom">
                              <Avatar style={{ "backgroundColor": "green" }}
                                alt={colabData.firstName}
                                src="/"
                              ></Avatar>
                            </Tooltip>
                          </div>
                        )
                      })
                      : undefined
                  }
                </div>
              </div>
              <div className='iconfordialog' >
                <div className='IconsContainer' > <NoteIcons
                  image={(data) => {
                    this.setState({ file: data });
                  }} /> </div>
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