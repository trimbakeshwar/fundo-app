import React from 'react';
import '../../CSS/DashbordScss/titleNote.scss'
import '../../CSS/DashbordScss/notescss.scss'
import { NoteIcons } from './iconButtons'
import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@material-ui/core'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Container from "@material-ui/core/Container";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DashbordService from "../../services/dashbordservices";
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import {
  Checkbox,
Avatar
} from "@material-ui/core";

import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Collaborator from "./collaborator"
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
const commonUrl = "http://fundoonotes.incubation.bridgelabz.com/"
const service = new DashbordService();
export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteOpen: false,
      title: '',
      description: '',
      file: '',
      collaboratorOpen: false,
      collaberators:"" ,
      collaboratorData:"",
      checklistOpen: false,
      checklist: "",
      checkList: [""],
      isCheckList: false,
      clearIcon: true,
      isClickOn: false,
      dataa:false
    };
  }
  handleClick = () => {
    this.setState({
      noteOpen: true,
    });
    console.log("onclick", this.state.noteOpen)
  };
  onHandleClickaway = () => {
    this.setState({
      noteOpen: false,
    });
    console.log("away click", this.state.noteOpen)
  };
  titleHandler = (e) => {
    this.setState({ title: e.target.value })
  }
  TakeanoteHandler = (e) => {
    this.setState({ description: e.target.value })
  }
  close = (eve) => {

    console.log("collaboratorData",this.state.collaboratorData)
      let apiInputData = new FormData();
      apiInputData.set("title", Boolean(this.state.title) ? this.state.title : "")
      apiInputData.set("description", Boolean(this.state.description) ? this.state.description : "")
      apiInputData.set("file", Boolean(this.state.file) ? this.state.file : "")
      apiInputData.set("checklist", JSON.stringify(this.state.checkList));
      apiInputData.set(
        "collaberators",
        Boolean(this.state.collaboratorData)
          ? JSON.stringify([this.state.collaboratorData])
          : ""
      );
     // apiInputData.set("collaberators", JSON.stringify(this.state.collaboratorData));
      
            let requestData = {
              title: this.state.title,
              description: this.state.description,
              file:this.state.file,
              checklist:this.state.checkList,
              collaberators:this.state.collaberators
            }
      console.log("data of request", apiInputData)
      service.AddNote(apiInputData).then((Response) => {
        console.log("add data",Response)
        this.setState({ noteOpen: false ,
          checklistOpen:false,
          checkList: [""],
          dataa:false,
          collaboratorData: "",
        });
        console.log(this.state);
      }).catch((err) => {
        console.log(err)
      });
    this.props.updateOnAdd();
    this.setState({
      file: ''
    })
  }

  GetImage = (data) => {
    this.setState({ file: data })
    console.log("get img ", this.state)
  }
  openChecklist = () => {
    this.setState({ checklistOpen: true })
    console.log("checklist",this.state.checklistOpen)
  }
  AddCheckList = () => {
    let CheckListArray  = [...this.state.checkList];
    let ListArray = CheckListArray[CheckListArray.length-1];
    CheckListArray[CheckListArray.length-1]="";
    CheckListArray.push(ListArray);
    this.setState({ checkList: CheckListArray });
  }
 
  onChangeList=(index)=>(eve)=>{
    let CheckListArray  = [...this.state.checkList];
    CheckListArray[index]={
      itemName:eve.target.value,
      status:
      CheckListArray[index].isChecked != undefined?
      CheckListArray[index].status:"open",
      isDeleted:"false",
      noteId:""
    };
    this.setState({ checkList: CheckListArray });
  }
  CheckBoxhandler=(index)=>(eve)=>{
    let ListArray   = [...this.state.checkList];
    ListArray [index]={
      itemName:ListArray[index].itemName,
      status:
      ListArray [index].status === undefined || 
      ListArray [index].status === "open"?"close":"open",
      isDeleted:"false",
      noteId:""
    };
    this.setState({ checkList: ListArray  });
  }
  clearIconOffhover = () => {
    if (!this.state.isClickOn) {
      this.setState({ clearIcon: false });
    }
  };
  clearIconOnHover = () => {
    this.setState({ clearIcon: true });
  };
  clarClickAway = () => {
    if (this.state.isClickOn) {
      this.setState({ clearIcon: false });
    }
  };
 clearIconClick = () => {
    if (!this.state.isClickOn) {
      this.setState({ clearIcon: false });

    }
  }
  addcollaborator = (data) => {
    this.setState({
     collaboratorOpen: !this.state.collaboratorOpen,
     collaboratorData: data
    });
    console.log("collab", this.state.collaboratorData);
  };
  render() {
    return (
      <Container >
        <ClickAwayListener onClickAway={this.onHandleClickaway} >
          <div>
            {(this.state.noteOpen || this.state.checklistOpen)?
            this.state.collaboratorOpen ? (
              <div style={{marginLeft:"23em",paddingTop:"20px"}}>
              <Collaborator addcollaborator={(data)=>this.addcollaborator(data)} />
              </div>
            ):
              (
                <div className='noteCotainer' onHandleClickaway={this.onHandleClickaway}>
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

                  <div className='textFieldContainer'>
                    <TextField
                      className='textfields' id='tittle' placeholder='Title' textdecaration='none' onChange={this.titleHandler} multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className="checklistSetting">
                    {this.state.checklistOpen ? (
                      this.state.checkList.map((values, index) => {
                        if (index === this.state.checkList.length - 1) {
                          return (
                            <div>
                              <TextField disable placeholder=" + List item"
                                multiline textdecaration="none"
                                onClick={this.AddCheckList}
                                InputProps={{
                                  disableUnderline: true,
                                }}
                              />
                            </div>
                          );
                        } else {
                          return (

                            <ClickAwayListener
                              onClickAway={this.onHandleClickaway} 
                               >

                              <div className="checklistContainer"
                               
                                onMouseEnter={this.clearIconOnHover}
                                onMouseLeave={this.clearIconOffhover}
                                onClick={this.clearIconClick}
                              >
                                <div>
                                  <Checkbox
                                    checked={values.isChecked}
                                    onChange={this.CheckBoxhandler(index)}
                                    style={{ color: "black" }}
                                  />
                                </div>
                                <div className='textFieldContainer'>
                                  <TextField
                                    fullWidth
                                    //id='description'
                                    className='textfield'
                                    placeholder='Take a Note'
                                    textdecaration='none'
                                    value={values.value}
                                    onChange={this.onChangeList(index)}
                                    multiline
                                    InputProps={{ disableUnderline: true }} />
                                </div>

                                <div>
                                  <IconButton fontSize="small">
                                    {this.state.clearIcon ? (
                                      <ClearOutlinedIcon fontSize="small" />
                                    ) : undefined}
                                  
                                  </IconButton>
                                </div>
                              </div>
                            </ClickAwayListener>
                          )
                        }
                      })
                    ) : (
                        <div className='textFieldContainer'>
                          <TextField
                          id='description'
                            className='textfield'
                            placeholder='Take a Note'
                            textdecaration='none'
                            onChange={this.TakeanoteHandler}
                            multiline
                            InputProps={{ disableUnderline: true }} />
                        </div>
                      )}
                  </div>
 <div className="collaborator">
              {Boolean(this.state.collaboratorData) ? (
                <div>
                 <Tooltip title={this.state.collaboratorData.email} placement="bottom">
                        <Avatar
                          alt={this.state.collaboratorData.firstName}
                          src="/"
                        ></Avatar>
                      </Tooltip>

                </div>
              ) : undefined}
              </div>
                  <div className="iconPositionSetting" >
                    <div>
                      <NoteIcons variant="createNote" image={(data) => this.GetImage(data)}
                       CollaboratorIcon={(dataa)=>this.setState({collaboratorOpen:dataa})} />
                    
                    </div>
                    <div className="closeButtonSetting">
                      <Button id="closed" color="primary" onClick={this.close}>close</Button>
                    </div>
                  </div>
                </div>
              ) :
              (
                <div className='titleNoteContainer'  >
                  <div id="idOffhandleClick" className='titleTextField' onClick={this.handleClick}>
                    <TextField id='tittle' placeholder='Take a note..' textdecaration='none' value="" multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className='titleNoteIcons'>
                    <div> <IconButton><CheckBoxOutlinedIcon onClick={this.openChecklist} fontSize='medium' /></IconButton> </div>
                    <div> <IconButton><BrushOutlinedIcon fontSize='medium' />  </IconButton></div>
                    <div> <IconButton><ImageOutlinedIcon fontSize='medium' /> </IconButton> </div>
                  </div>
                </div>)}
          </div>
        </ClickAwayListener>
      </Container>
    );
  }
}
export default CreateNote;