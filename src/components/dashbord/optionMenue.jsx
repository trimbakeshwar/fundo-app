import React, { Component } from "react";
import {MenuItem,Popper,Paper,Fade,Tooltip,ClickAwayListener,} from "@material-ui/core";
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import DashbordService from "../../services/dashbordservices";
import config from "../../services/configservices";
import "../../CSS/DashbordScss/moreOption.scss"
const service = new DashbordService();


class MoreOptions extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
      open: false,
      noteID:"",
      isDeleted: false

    };
    this.clickMoreOptions = this.clickMoreOptions.bind(this);
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
      noteIdList: [this.props.NoteId.id],
      isDeleted: true
    };
    service.DeleteNotes(requestData).then((Response)=>{
        console.log("deleted",Response);
    }).catch((err)=>{
        console.log("deleted",err);
    })
    this.props.refresh();
  };

  closeMenu() {
    this.setState({
      open: false,
    });
  }

  render() {
     
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