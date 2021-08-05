import { EDIT_USER, GET_STUDENTS, GET_TEACHERS, MODF_PASSWORD } from "../actionTypes/actionTypes"



const initialState = {
    user: [],
    Students: [],
    Teacher: [],
    loading: true
}


const EditUser = (state = initialState, { type, payload }) => {
    switch (type) {

        case MODF_PASSWORD:
            return {
                ...state,
                loading: false,
                user: payload,
                Students: null
            };
    
        case EDIT_USER:
            return {
                ...state,
                leading: false,
                user: payload,
                Students: null
            };
        case GET_STUDENTS:
            return {
                ...state,
                loading: false,
                Students: payload,
                user: null
            };
        case GET_TEACHERS:
            return {
                ...state,
                user: null,
                Teacher: payload,
                loading: false,
            };
        default:
            return state;
    }
};
export default EditUser;


