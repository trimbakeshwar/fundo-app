import React, { Component } from "react";
import "../../CSS/DashbordScss/display.scss";
import DashbordService from "../../services/dashbordservices";
import CreateNote from "./createNote"
import Display from "./displayNotes"
import Collaborator from "./collaborator";
const service = new DashbordService();
export class GetAllNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllNotes: [],
            title: "",
            discription: ""
        };
        this.getAllNotes()
    }
    getAllNotes = () => {
        service.GetNotes().then((Response => {
           
            this.setState({ AllNotes: Response.data.data.data })
        })).catch((err) => {
            console.log(err)
        });
    }
    render() {
        return (
            <div>
                <div className="refresh data">
                    <CreateNote updateOnAdd={() => this.getAllNotes()}></CreateNote>
                </div>
                <Display data ={this.state.AllNotes.filter((data) => data.isDeleted === false)
                    .filter((data) => data.isArchived === false)
                    .filter((data) => data.isPined === false)
                    .slice(0)}
                    updateOnAdd={() => this.getAllNotes()}
                />
               
                  
            </div>
        );
    }
}
export default GetAllNotes;