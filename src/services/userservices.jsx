import axios from "axios";
 class AxiosService {  
    
    LoginData(url,data){
        return axios.post(url+"user/login",data);
    }
    RegisterData(url,data){
        return axios.post(url+"user/userSignUp",data);
    }
    ResetPassword(url,data){
        return axios.post(url+"user/reset-password",data);     
    }
    Recover(url,data){
        return axios.post(url+"user/reset",data);     
    }
}
export default AxiosService;