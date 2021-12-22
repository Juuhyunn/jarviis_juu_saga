import axios from "axios";
import { FlowerDataPayload, FlowerIdPayload } from "./gardenSlice";
const SERVER = 'http://192.168.0.73:8000/api'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function listAPI( data: FlowerIdPayload){
    // alert(`API :: data :: ${data.user_id}`)
    return axios.get(`${SERVER}/flower/list/${data.user_id}`)
}
export default {
    listAPI
}