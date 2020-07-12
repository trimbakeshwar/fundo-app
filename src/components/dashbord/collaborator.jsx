import React from 'react';
import { Component } from 'react';
import "../../CSS/DashbordScss/colaborator.scss"
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Card from "@material-ui/core/Card";
import { MenuItem, Divider, TextField, Popover, MenuList, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DashbordService from "../../services/dashbordservices";
const service = new DashbordService();
export class Collaborator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userName: "",
            anchorEl: null,
            collabatorName: "",
            userList: [],
            userData: ""
        }
    }
    selectUser = (data) => {
        this.setState({
            collabatorName: data.email,
            userData: data,
            anchorEl: "",
        });
    }
    SearchClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    }
    handleClose = () => {
        this.setState({ open: false });
    }
    Collaborator = (data) => {
        if (Boolean(this.props.NoteId)) {
            let collaborators = this.state.userData;
            service.AddCollaborator(this.props.NoteId, collaborators).then((Response) => {
                console.log("Collab Data", Response);
            }).catch((err) => {
                console.log("Collab Data", err);
            })


            this.handleClose();
        } else {
            this.props.addcollaborator(data);
        }
    }
    UserList = (event) => {
        this.setState({
            collabatorName: event.target.value,
        });

        let requestData = {
            searchWord: event.target.value,
        };
        service.searchUser(requestData).then((Response) => {
            console.log("x", Response)
            if (Response.status === 200) {
                this.setState({
                    anchorEl: event.currentTarget,
                    open: true,
                });
                this.setState({ userList: Response.data.data.details });
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        const userList = this.state.userList.map((values, index) => {
            return (
                <MenuItem key={index} onClick={() => this.selectUser(values)}>
                    {values.Email}
                </MenuItem>
            );
        });
        return (
            <div>
                <Card className="collaborationdialog"
                    open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <div id="form-dialog-title" className="collaboratorTitle">
                        Collaborators
                    </div>
                    <Divider variant='middle' />
                    <div>
                        <div className="dialogtext">
                            <div className="ownerProfile">
                                <div className="OwerProfileImage">
                                    <AccountCircle />
                                </div>

                                <div className="nameAndMail">
                                    <div>
                                        {localStorage.getItem("FirstName") + " " +
                                            localStorage.getItem("LastName") + " " +
                                            "(Owner)"}
                                    </div>
                                    <div>
                                        {localStorage.Email}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dialogSearch">
                            <div className="dialogimage">
                                <PersonAddOutlinedIcon />
                            </div>
                            <div className="dialogtextfield">
                                <TextField placeholder="Person or Email to Share with"
                                    id="standard-full-width"
                                    name="userName"
                                    fullWidth
                                    //onClick={this.SearchClick}
                                    onChange={this.UserList}
                                    value={this.state.collabatorName}
                                    margin="normal"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                />
                                <Popover open={Boolean(this.state.anchorEl)}
                                    className="collaboratorMenu"
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                >
                                    <MenuList>{userList}</MenuList>
                                </Popover>
                            </div>
                        </div>
                    </div>
                    <div className="dialogbutton">
                        <Button onClick={() => this.handleClose()}>Cancel</Button>
                        <Button onClick={() => this.Collaborator(this.state.userData)}>
                            save</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
export default Collaborator;