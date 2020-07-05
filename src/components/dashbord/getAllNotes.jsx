import React, { Component } from "react";
import MoreOptions from "./optionMenue"
import AllArchiveNotes from "./archiveNote"
import "../../CSS/DashbordScss/display.scss";
import DashbordService from "../../services/dashbordservices";
import config from "../../services/configservices";
import CreateNote from "./createNote"
import Display from "./displayNotes"
const service = new DashbordService();
export class GetAllNotes extends Component{
    constructor(props){
        super(props);
        this.state={
            AllNotes: [],
            title:"",
            discription:""
        };
        this.getAllNotes()

    }
    getAllNotes=()=>{
       service.GetNotes().then((Response=>{
         console.log(Response.data.data.data)
          this.setState({AllNotes:Response.data.data.data })
       })).catch((err)=>{
           console.log(err)
       });
    }
    UpdateOnChange=()=>{
        this.getAllNotes();
    }
    render(){
        return(
            <div> 
               <div className="refresh data">
               <CreateNote ></CreateNote>
               </div>
              <div className="storage">
                <Display data = { this.state.AllNotes.filter((data)=> data.isDeleted === false)
                                  .filter((data)=> data.isArchived === false)
                                  .filter((data)=> data.isPined === false)
                                  .slice(0)}
                                 updateOnAdd={()=>this.getAllNotes()}
             
                 />
                </div>
            </div>
        );
    }
}
export default GetAllNotes;