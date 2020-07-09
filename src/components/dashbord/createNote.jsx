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
const service = new DashbordService();


export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteOpen: false,
      title: '',
      description: '',


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

      let requestData = {
        title: this.state.title,
        description: this.state.description,
      }
      service.AddNote(requestData).then((Response) => {
        this.setState({ noteOpen: false });
        console.log(this.state);


      }).catch((err) => {
        console.log(err)
      });
    }
    this.props.updateOnAdd();
  }

  render() {
    return (

      <Container >
        <ClickAwayListener onClickAway={this.onHandleClickaway} >

          <div>
            {this.state.noteOpen ?
              (
                <div className='noteCotainer' onHandleClickaway={this.onHandleClickaway}>
                  <div className='textFieldContainer'>
                    <TextField
                      className='textfields' id='tittle' placeholder='Title' textdecaration='none' onChange={this.titleHandler} multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className='textFieldContainer'>
                    <TextField className='textfield' placeholder='Take a Note' textdecaration='none' onChange={this.TakeanoteHandler} multiline InputProps={{ disableUnderline: true }} />
                  </div>
                  <div className="iconPositionSetting" >
                    <div>
                      <NoteIcons />
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