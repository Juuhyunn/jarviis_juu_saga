import axios from "axios";
import { HistoryPayload, ListDataPayload, HistoryDataPayload } from "./historySlice";
const SERVER = 'http://192.168.0.73:8000/api'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege..'
}

function createAPI( data: HistoryPayload){
    return axios.post(`${SERVER}/history/create`, JSON.stringify(data), { headers })
}
function listAPI( data: ListDataPayload){
    // alert("api 들어옴")
    // alert(JSON.stringify(data))


    // return axios.get(`${SERVER}/history/list/${data.user_id}/${data.date}`)
    return axios.post(`${SERVER}/history/list`,JSON.stringify(data), { headers })
}
function modifyAPI( data: HistoryDataPayload){
    // return axios.get(`${SERVER}/history/list/${data.user_id}/${data.date}`)
    alert("api 들어옴")
    alert(JSON.stringify(data))
    return axios.put(`${SERVER}/history/modify`,JSON.stringify(data), { headers })
}
// const modify = x => axios.put(`${SERVER}/history/modify/${x}`)
// const remove = x => axios.delete(`${SERVER}/history/remove/${x}`)
// const create = x => axios.post(`${SERVER}/history/create`,JSON.stringify(x),{headers})
// const find = x => axios.get(`${SERVER}/history/find/${x}`)//pk로 찾는거 하나 무조건 있어야됌
// const list = x => axios.get(`${SERVER}/history/list/${x}`)//page로 찾는거 하나 
// const hmap = x => axios.get(`${SERVER}/history/map/${x}`)


export default {
    createAPI,
    listAPI,
    modifyAPI
}