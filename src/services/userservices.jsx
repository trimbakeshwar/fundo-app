import axios from "axios";
 class AxiosService {  
    
    LoginData(url,data){
        return axios.post(url+"user/login",data);
    }
    RegisterData(url,data){
        return axios.post(url+"user/userSignUp",data);
    }   
  
}
export default AxiosService;