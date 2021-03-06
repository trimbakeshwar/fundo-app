import React from 'react';
import { Component } from 'react';
import "../../CSS/DashbordScss/colaborator.scss"
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Card from "@material-ui/core/Card";
import ClearIcon from '@material-ui/icons/Clear';
import { MenuItem, Divider, TextField, Popover, MenuList, Button } from '@material-ui/core';
import DashbordService from "../../services/dashbordservices";
import { Avatar } from "@material-ui/core";
const service = new DashbordService();
function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);

    return color;
}
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
        this.props.closeCollaborater();
    }
    Collaborator = (data) => {
        if (Boolean(this.props.NoteId)) {
            let collaborators = this.state.userData;
            console.log("userdata", collaborators)
            console.log("noteid", this.props.NoteId.id)
            service.AddCollaborator(this.props.NoteId.id, collaborators).then((Response) => {
                console.log("Collab Data", Response);
                this.props.closeCollaborater();
                this.props.refresh();
            }).catch((err) => {
                console.log("Collab Data", err);
            })
            this.props.closeCollaborater();
        } else {
            console.log("addcollaborator", data)
            this.props.addcollaborator(data);
        }
    }
    removeColaborator = (colaboratorData) => {
        const notesId = this.props.NoteId.id;
        const item = colaboratorData.userId
        console.log("notesId", notesId, "item", colaboratorData.userId);
        service
            .RemoveCollaborator(
                notesId,
                item
            )
            .then((json) => {
                console.log("collab removed", json);
            }).catch((err) => {
                console.log("err", err);
            });
        this.props.refresh();
    };
    UserList = (event) => {
        this.setState({
            collabatorName: event.target.value,
        });
        let requestData = {
            searchWord: event.target.value,
        };
        service.searchUser(requestData).then((Response) => {
            console.log("x", Response)
            console.log("localstorage", localStorage.getItem("firstName"))
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
                    {values.email}
                </MenuItem>
            );
        });
        return (
            <div>
                <Card className="collaboratorContainer"
                    open={true} onClose={this.handleClose} >
                    <div className="Title"> Collaborators</div>
                    <Divider />
                    <div>
                        <div className="userInformation">
                            <div className="userProfile">
                                <div ><Avatar style={{ "backgroundColor": "red" }}
                                    alt={localStorage.getItem("firstName")} size="small" src="/"  ></Avatar> </div>
                                <div className="information">
                                    <div>{localStorage.getItem("firstName") + " " +
                                        localStorage.getItem("lastName") + " " + "(Owner)"}</div>
                                    <div>{localStorage.getItem("email")}</div>
                                </div>
                            </div>
                        </div>
                        {
                            Boolean(this.props.NoteId) ? (
                                this.props.NoteId.collaborators.map((colaboratorData, index) => {
                                    return (
                                        <div className="userInformation">
                                            <div className="userProfile">
                                                <div ><Avatar style={{ "backgroundColor": "blue" }}
                                                    alt={colaboratorData.firstName} size="small" src="/"  ></Avatar> </div>
                                                <div className="information">
                                                    <div>
                                                        <div>{colaboratorData.firstName + " " +
                                                            colaboratorData.lastName}</div>
                                                        <div>{colaboratorData.email}</div>
                                                    </div>
                                                    <div className="clearcollab">
                                                        <ClearIcon onClick={() => this.removeColaborator(colaboratorData)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })) : undefined
                        }
                        <div className="SearchMail">
                            <div className="Collaboratorimage"><PersonAddOutlinedIcon /> </div>
                            <div className="collaboratortextfield">
                                <TextField placeholder="Person or Email to Share with"
                                    id="standard-full-width" name="userName" fullWidth
                                    onChange={this.UserList} value={this.state.collabatorName} margin="normal"
                                    InputProps={{ disableUnderline: true }}
                                />
                                <Popover open={Boolean(this.state.anchorEl)}
                                    className="registerUserMainueMenu"
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}>
                                    <MenuList className="userLists">{userList}</MenuList>
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