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
  AddInArchive(data){
    return Axios.Post(config.url+"notes/archiveNotes", data );	
  }
  GetArchiveNotes(){
    return Axios.Get (config.url+"notes/getArchiveNotesList");
  }
  UpdateNotes(data){
    return Axios.Post(config.url+"notes/updateNotes", data );	
  }
   ChangeColour(data){
    return Axios.Post(config.url+"notes/changesColorNotes", data );	
  }
  searchUser(data){
    return Axios.Post(config.url+"user/searchUserList", data );	
  } 
  AddCollaborator(id , data){
    return Axios.Post(config.url+"notes/"+id+"/AddcollaboratorsNotes", data );	
  }
	UpdateCheckList(id,checklistId,data){
    return Axios.Post(config.url+"notes/"+id+"/checklist/"+checklistId+"/update",data)
  }
  RemoveItem(id, checklistId){
    return Axios.Delete(config.url+"notes/"+id+"/noteCheckLists/"+checklistId)
  }
  RemoveCollaborator( notesId,userId){
    return Axios.Delete(config.url+"notes/"+notesId+"/removeCollaboratorsNotes/"+userId)
  }
}
export default DashbordService;
