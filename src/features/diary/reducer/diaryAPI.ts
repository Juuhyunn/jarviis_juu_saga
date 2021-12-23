import axios from "axios";
import { DiaryFindPayload } from "./diarySlice";
const SERVER = 'http://192.168.0.73:8000/api'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function findAPI( data: DiaryFindPayload){
    // alert(`API :: data :: ${data.diary_date}`)
    return axios.get(`${SERVER}/diary/find/${data.user_id}/${data.diary_date}`)
}
export default {
    findAPI
}