import axios from "axios";
 class DashbordService {  
    
    AddNote(url , data, token) {
		return axios.post(url+"notes/addNotes", data, {
			headers: {
				Authorization: token
			},
        });  
    }
    
    GetNotes(url , token) {
		return axios.get(url+"notes/getNotesList",  {
			headers: {
				Authorization: token
			},
        });  
    }
	
	DeleteNotes(url , token) {
		return axios.post(url+"notes/deleteForeverNotes",  {
			headers: {
				Authorization: token
			},
        });  
    }
    
}

export default DashbordService;
