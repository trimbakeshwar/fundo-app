import axios from "axios";
import config from "../services/configservices";
import AxiosServices from "../services/axiosservice";
const Axios = new AxiosServices();
 class DashbordService {  
    
    AddNote(data) {
		return Axios.Post(config.url+"notes/addNotes", data);  
    }
    
    GetNotes() {
		return Axios.Get (config.url+"notes/getNotesList");
    }
	
	DeleteNotes(data) {
		return Axios.Post(config.url+"notes/trashNotes", data );			
    }
    GetTrashNotes(){
		return Axios.Get (config.url+"notes/getTrashNotesList");
	}
}

export default DashbordService;
