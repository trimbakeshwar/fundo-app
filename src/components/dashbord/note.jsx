
import React, {Component} from "react";
import { TextField } from "@material-ui/core";
export class note extends Component{
    constructor(props){
    super(props);
    this.state={
        title:"",
        Discription:""
         }
    }

    render(){
        return( 
            <div className="addNoteContainer">
            <div>
                <TextField className="textBox" onChange={this.onTitleChange}></TextField>
            </div>
        </div>
        );
       
    }
}
export default note;