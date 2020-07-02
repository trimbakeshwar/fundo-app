import axios from "axios";
 class DashbordService {  
    
    AddNote(url , data, token) {
		return axios.post(url+"notes/addNotes", data, {
			headers: {
				Authorization: token
			},
		});
	}
}

export default DashbordService;