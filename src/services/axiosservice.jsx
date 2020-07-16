import axios from 'axios'
export default class AxiosServices{
   
    Post(url, data){
        return axios.post(url,data,{headers: { Authorization: localStorage.getItem("token") }})
    
}
    Get( url){
        return axios.get(url,{headers: { Authorization: localStorage.getItem("token") }})
    }

    Delete(url){
        return axios.delete(url,{headers: { Authorization: localStorage.getItem("token") }})
    }

}