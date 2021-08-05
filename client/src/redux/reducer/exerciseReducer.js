import { DELETE_EXERCISE, EDIT_EXERCISE, GET_EXERCISE, GET_TEACHER_EXERCISE } from "../actionTypes/actionTypes";

const initialState = {
    exercises: [],
    loading: true,
};

const exercise_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_EXERCISE:
            return {
                ...state,
                loading: false,
                exercises: payload,
            };
        case GET_TEACHER_EXERCISE:
            return {
                ...state,
                loading: false,
                exercises: payload,
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                loading: false,
                exercises: state.exercises.filter((el) => el._id !== payload._id),
            };
        case EDIT_EXERCISE:
            return {
                ...state,
                loading: false,
                exercises: state.exercises.map((el) => (el._id === payload._id ? payload : el)),
            };

        default:
            return state
    }
}
export default exercise_reducer;