import axios from "axios";
import { GET_STUDENTS, GET_TEACHERS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes/actionTypes"


export const getstudent = () => async (dispatch) => {
    try {
        let res = await axios.get('/user/students');
        dispatch({
            type: GET_STUDENTS,
            payload: res.data,
        });
        console.log(res.data)
    }
    catch (error) {
        alert(error)
    }
};

export const getteacher=()=> async(dispatch)=>{
    try {
        let res=await axios.get('/user/teachers');
        dispatch({
            type:GET_TEACHERS,
            payload:res.data,
        });
    } catch (error) {
        alert(error)
    }
}


export const register = (newUser) => async (dispatch) => {

    dispatch({
        type: REGISTER
    })
    try {
        let res = await axios.post("/user/registerTeacher", newUser);
        console.log(res.data);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data,
        });
    }
}