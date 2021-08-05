import axios from "axios";
import { ADD_GROUPE, GET_ALL_GROUPES, GET_STUDENTS_GROUPES, GET_TEACHER_GROUPES, REQ_INSC, REQ_INSC_FAIL, REQ_INSC_SUCCESS } from "../actionTypes/actionTypes";




export const CreateGroupe = (newGroupe) => async (dispatch) => {

    try {
        let res = await axios.post('/groupe/add', newGroupe);
        dispatch({
            type: ADD_GROUPE,
            payload: res.data
        })

    } catch (error) {
        alert("group creation failed");
    }
}
export const get_all_groupes = () => async (dispatch) => {

    try {
        let res = await axios.get("/groupe/")
        dispatch({
            type: GET_ALL_GROUPES,
            payload: res.data
        })
    } catch (error) {
        alert("get group error")
    }

}

export const get_teacher_groupes = (teacherid) => async (dispatch) => {
    console.log(teacherid)
    try {
        let res = await axios.get(`/groupe/mygroupe/${teacherid}`,)
        dispatch({
            type: GET_TEACHER_GROUPES ,
            payload: res.data
        })
    } catch (error) {
        alert("get group error")
    }

}

export const get_student_groupes = (studentid) => async (dispatch) => {
    console.log(studentid)
    try {
        let res = await axios.get(`/groupe/insgroupe/${studentid}`,)
        dispatch({
            type: GET_STUDENTS_GROUPES ,
            payload: res.data
        })
    } catch (error) {
        alert("get group error")
    }

}

export const request_add = (_id,iduser) => async (dispatch) => {
    dispatch({
        type:REQ_INSC,
    })
    try {
        let res = await axios.put(`/groupe/requestadd/${_id}`, {iduser , iduser})
        dispatch({
            type: REQ_INSC_SUCCESS,
            payload: res.data
        })
        alert(res.data)
        
    } catch (error) {
        dispatch({
            type: REQ_INSC_FAIL,
            payload: error
        })
        alert(error)
    }
}