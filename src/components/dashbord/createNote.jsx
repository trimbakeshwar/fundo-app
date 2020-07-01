
import React from "react";
import Container from "@material-ui/core/Container";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Note from "./notes"
import SmallNotes from "./titleNote"
export class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        noteOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      noteOpen: true,
    });
    console.log("onclick",this.state.noteOpen)
  };

  onHandleClickaway = () => {
    this.setState({
        noteOpen: false,
    });
    console.log("away click",this.state.noteOpen)
    
  };

  render() {
    return (
     <Container >
        <ClickAwayListener onClickAway={this.onHandleClickaway} >
          <div>
            {this.state.noteOpen ? ( < Note onHandleClickaway={this.onHandleClickaway}/>):(<SmallNotes  click={this.handleClick} /> )  }
          </div>
        </ClickAwayListener>
        </Container>
      
    );
  }
}
export default CreateNote;