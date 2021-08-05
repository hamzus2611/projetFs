import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes/actionTypes";


const init = {
    users: null,
    loading: false,
    errors: null,
    cookie: []
};

const UserReducer = (state = init, { type, payload }) => {
    switch (type) {

        case REGISTER:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
                cookie: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: null,
                cookie: payload,
            };
        case LOGIN:
            return {
                ...state,
                loading: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
                cookie: null

            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: null,
                cookie: payload,
            };
        case LOGOUT:
            return {
                ...state,
                loading: false,
                user: null,
                Students: null
            }
        default:
            return state;
    }
};


export default UserReducer;