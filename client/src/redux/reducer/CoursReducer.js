import { DELETE_COURS, EDIT_COURS, GET_COURS } from "../actionTypes/actionTypes";

const initialState = {
    cours: [],
    loading: true,
};

const cours_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_COURS:
            return {
                ...state,
                loading: false,
                cours: payload,
            };
        case DELETE_COURS:
            return {
                ...state,
                loading: false,
                cours: state.cours.filter((el) => el._id !== payload._id),
            };
        case EDIT_COURS:
            return {
                ...state,
                loading: false,
                cours: state.cours.map((el) => (el._id === payload._id ? payload : el)),
            };

        default:
            return state
    }
}
export default cours_reducer;