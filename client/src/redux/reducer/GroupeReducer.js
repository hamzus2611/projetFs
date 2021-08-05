import { ADD_GROUPE, GET_ALL_GROUPES, GET_STUDENTS_GROUPES, GET_TEACHER_GROUPES, REQ_INSC, REQ_INSC_FAIL, REQ_INSC_SUCCESS } from "../actionTypes/actionTypes"



const init = {
    Loading: false,
    Groupe: [],
    err: {}
}

const GroupeReducer = (state = init, { type, payload }) => {
    switch (type) {

        case ADD_GROUPE:
            return {
                ...state,
                Loading: true,
                Groupe: payload
            }
        case GET_ALL_GROUPES:
            return {
                ...state,
                Loading: true,
                Groupe: payload
            }
        case GET_TEACHER_GROUPES:
            return {
                ...state,
                Loading: true,
                Groupe: payload
            }
        case GET_STUDENTS_GROUPES:
            return {
                ...state,
                Loading: true,
                Groupe: payload
            }
        case REQ_INSC:
            return {
                ...state,
                Loading: true,
                //err: payload,
            }
        case REQ_INSC_FAIL:
            return {
                ...state,
                loading: false,
                err: payload

            };
        case REQ_INSC_SUCCESS:
            return {
                ...state,
                loading: false,
                //Groupe: state.Groupe.map((el) => (el.id === payload.id) ? payload : el),
                //Groupe: payload,
                err: null
            };
        default:
            return state
    }
}
export default GroupeReducer