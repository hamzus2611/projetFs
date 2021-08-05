import axios from "axios"
import { ADD_EXERCISE, DELETE_EXERCISE, EDIT_EXERCISE, GET_EXERCISE, GET_TEACHER_EXERCISE } from "../actionTypes/actionTypes"


export const getExercise = () => async (dispatch) => {
    try {
        let res = await axios.get('/exercise/')
        dispatch({
            type: GET_EXERCISE,
            payload: res.data,
        });

    } catch (error) {
        alert("GET EXERCICE ERROR")
    }
};
export const deleteExercise = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`/exercise/delete/${id}`);
        dispatch({
            type: DELETE_EXERCISE,
            payload: res.data,
        })
    } catch (error) {
        alert('DELETE EXERCISE ERROR');
    }
}
export const addExercise = ( id_prof, description, duration, date, timestamps) => async (dispatch) => {
    try {
        const newExercise = {
            id_prof,
            description,
            duration,
            date,
            timestamps
        }
        const res = await axios.post(`exercise/add`, newExercise);
        dispatch({
            type: ADD_EXERCISE,
            payload: res.data
        })
    } catch (error) {
        alert("ADD ERRORS")
    }
}
export const editExercise = (id, id_prof, description, duration, date, timestamps) => async (dispatch) => {
    try {
        const ex_update = {
            id_prof,
            description,
            duration,
            date,
            timestamps
        }
        const res = await axios.put(`exercise/delete/${id}`, ex_update);
        dispatch({
            type: EDIT_EXERCISE,
            payload: res.data
        })
    } catch (error) {
        alert("UPDATE ERRORS")
    }
}

export const get_teacher_exercise = (teacherid) => async (dispatch) => {
    console.log(teacherid)
    try {
        let res = await axios.get(`/exercise/myexercise/${teacherid}`,)
        dispatch({
            type: GET_TEACHER_EXERCISE ,
            payload: res.data
        })
    } catch (error) {
        alert("get exercise error")
    }

}