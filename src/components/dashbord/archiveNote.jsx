import React, { Component } from "react";
import "../../CSS/DashbordScss/display.scss";
import "../../CSS/DashbordScss/trash.scss";
import DashbordService from "../../services/dashbordservices";
import Display from "./displayNotes"
const service = new DashbordService();
export class AllArchiveNotes extends Component {
   constructor(props) {
      super(props);
      this.state = {
         ArchiveNotes: [],
      };
      this.getArchiveAllNotes()
   }
   getArchiveAllNotes = () => {
      service.GetArchiveNotes().then((Response => {
         console.log(Response.data.data.data)
         this.setState({ ArchiveNotes: Response.data.data.data })
      })).catch((err) => {
         console.log(err)
      });
   }
   render() {
      return (
         <div className="storage">
            <Display data={this.state.ArchiveNotes.filter((data) => data.isArchived === true)} />
         </div>
      );
   }
}
export default AllArchiveNotes;