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
const commonUrl="http://fundoonotes.incubation.bridgelabz.com/"
const service = new DashbordService();
export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteOpen: false,
      title: '',
      description: '',
      file:''
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
  
    if (this.state.title != "" && this.state.description != "") {
      let apiInputData = new FormData();
      apiInputData.set("title",Boolean(this.state.title) ? this.state.title : "")
       apiInputData.set("description",Boolean(this.state.description) ? this.state.description : "")
       apiInputData.set("file",Boolean(this.state.file) ? this.state.file : "")

/*
      let requestData = {
        title: this.state.title,
        description: this.state.description,
        file:this.state.file
      }*/
      console.log("data of request",apiInputData)
      service.AddNote(apiInputData).then((Response) => {
        this.setState({ noteOpen: false });
        console.log(this.state);
      }).catch((err) => {
        console.log(err)
      });
    }
  
    this.props.updateOnAdd();
   
    this.props.updateOnAdd();
    this.setState({
     
      file:''
    })
  }
  
  GetImage=(data)=>{
    this.setState({file:data})
    console.log("get img ",this.state)
  }
  render() {
    return (
      <Container >
        <ClickAwayListener onClickAway={this.onHandleClickaway} >
          <div>
            {this.state.noteOpen ?
              (
                <div className='noteCotainer' onHandleClickaway={this.onHandleClickaway}>
                   <div>
              {(this.state.file != "")? 
              <img
                src={`${URL.createObjectURL(this.state.file)}`}
                alt="Curently image is not available"
                width="600px"
                height="500px"
                style={{paddingTop:"10px"}}
              />
              : "" 
              }
            </div>
                  <div className='textFieldContainer'>
                    <TextField
                      className='textfields' id='tittle' placeholder='Title' textdecaration='none' onChange={this.titleHandler} multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className='textFieldContainer'>
                    <TextField className='textfield' placeholder='Take a Note' textdecaration='none' onChange={this.TakeanoteHandler} multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className="iconPositionSetting" >
                    <div>
                      <NoteIcons image={(data)=>this.GetImage(data)}/>
                    </div>
                    <div className="closeButtonSetting">
                      <Button color="primary" onClick={this.close}>close</Button>
                    </div>
                  </div>
                </div>
              ) :
              (
                <div className='titleNoteContainer'  >
                  <div className='titleTextField' onClick={this.handleClick}>
                    <TextField id='tittle' placeholder='Take a note..' textdecaration='none' value="" multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className='titleNoteIcons'>
                    <div> <IconButton><CheckBoxOutlinedIcon fontSize='medium' /></IconButton> </div>
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