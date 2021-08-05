import axios from "axios"
import { ADD_COURS, DELETE_COURS, EDIT_COURS, GET_COURS } from "../actionTypes/actionTypes";



export const getcours = () => async (dispatch) => {
    try {
        let res = await axios.get('/exercise/')
        dispatch({
            type: GET_COURS,
            payload: res.data,
        });

    } catch (error) {
        alert("GET COURS ERROR")
    }
};
export const deleteExercise = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`/exercise/delete/${id}`);
        dispatch({
            type: DELETE_COURS,
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
            type: ADD_COURS,
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
            type: EDIT_COURS,
            payload: res.data
        })
    } catch (error) {
        alert("UPDATE ERRORS")
    }
}

