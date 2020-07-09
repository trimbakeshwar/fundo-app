import React, { Component } from "react";
import "../../CSS/DashbordScss/display.scss";
import "../../CSS/DashbordScss/trash.scss";
import DashbordService from "../../services/dashbordservices";
import Display from "./displayNotes"
const service = new DashbordService();

export class AllTrashNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TrashNotes: [],


        };
        this.getTrashAllNotes()

    }
    getTrashAllNotes = () => {
        service.GetTrashNotes().then((Response => {
            console.log(Response.data.data.data)
            this.setState({ TrashNotes: Response.data.data.data })
        })).catch((err) => {
            console.log(err)
        });

    }

    render() {

        return (
            <div className="storage">
                <Display data={this.state.TrashNotes.filter((data) => data.isDeleted === true)} />
            </div>
        );
    }
}
export default AllTrashNotes;
