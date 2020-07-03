import React, { Component } from "react";
import {MenuItem,Popper,Paper,Fade,Tooltip,ClickAwayListener,} from "@material-ui/core";
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DashbordService from "../../services/dashbordservices";
import config from "../../services/configservices";

const service = new DashbordService();


class MoreOptions extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false,
    };
    this.clickMoreOptions = this.clickMoreOptions.bind(this);
    this.handleDeleteNotes = this.handleDeleteNotes.bind(this);
  }
  clickMoreOptions(event) {
      const { currentTarget } = event;
      this.setState((state) => ({
        anchorEl: currentTarget,
        open: !state.open,
      })); 
  }
 

  handleDeleteNotes = () => {
    let token = localStorage.getItem("token");
    let requestData = {
        noteIdList: [this.props.NoteId],
      isDeleted: true
    };
    service.DeleteNotes(config.url,requestData,token).then((Response)=>{
        console.log("deleted",Response);
    }).catch((err)=>{
        console.log("deleted",err);
    })
  
  };

  closeMenu() {
    this.setState({
      open: false,
    });
  }

  render() {
      console.log("call menu render");
    
    return (
      <div>
        <Tooltip title="More Options">
          <MoreVertOutlinedIcon onClick={this.clickMoreOptions} />
        </Tooltip>
        <Popper open={this.state.open} anchorEl={this.state.anchorEl} placement={"bottom"} transition style={{ position: "fixed" }}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper className="paper">
                <ClickAwayListener onClickAway={() => this.closeMenu()}>
                  <div className="MoreOptions">
                    <MenuItem  className="menuItems" onClick={this.handleDeleteNotes} > Delete Note </MenuItem>  
                  </div>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}
export default MoreOptions;