import axios from "axios";
 class AxiosService {  
    
    LoginData(url,data){
        return axios.post(url+"user/login",data);
    }     
  
}
export default AxiosService;