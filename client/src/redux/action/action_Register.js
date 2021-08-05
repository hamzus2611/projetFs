import { EDIT_USER, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, MODF_PASSWORD, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes/actionTypes"
import axios from 'axios'



//------------ Action register-------------///
export const register = (newUser, router) => async (dispatch) => {

    dispatch({
        type: REGISTER
    })
    try {
        console.log(newUser);
        let res = await axios.post("/user/register", newUser);
        console.log(res.data)
        localStorage.setItem("name", res.data.name);
        sessionStorage.setItem("isAuth", res.data.isAuth);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        router.push("/")
    } catch (error) {
        sessionStorage.setItem("isAuth", false);
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data,
        });
    }
}

//-------------Action registerADMINN--------------///
export const registerAdmin = (newUser, router) => async (dispatch) => {

    dispatch({
        type: REGISTER
    })
    try {
        console.log(newUser);
        let res = await axios.post("/user/registerAdmin", newUser);
        console.log(res.data)
        localStorage.setItem("name", res.data.name);
        sessionStorage.setItem("isAuth", res.data.isAuth);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        alert('Admin Register with success')
        router.push("/")
    } catch (error) {
        sessionStorage.setItem("isAuth", false);
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data,
        });
    }
}


//-------------Action registerTeacher--------------///
export const registerTeacher = (newUser, router) => async (dispatch) => {

    dispatch({
        type: REGISTER
    })
    try {
        console.log(newUser);
        let res = await axios.post("/user/registerTeacher", newUser);
        console.log(res.data)
        localStorage.setItem("name", res.data.name);
        sessionStorage.setItem("isAuth", res.data.isAuth);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        alert('Teacher register with success')
        router.push("/")
    } catch (error) {
        sessionStorage.setItem("isAuth", false);
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data,
        });
    }
}

//------------------- Action LOGOUT-------------------------///
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem("_id");
    localStorage.removeItem("username");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");
    localStorage.removeItem("countery");
    localStorage.removeItem("phone");
    localStorage.removeItem("id");
    localStorage.removeItem("date_birth");
    sessionStorage.removeItem('isAuth');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('_id');
    sessionStorage.removeItem('Role');
    history.push('/user/signin');
}

export const login = (User, router) => async (dispatch) => {
    dispatch({
        type: LOGIN
    })
    console.log(User)
    try {
        let res = await axios.post('/user/login', User);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        console.log(res)
        sessionStorage.setItem("isAuth", res.data.isAuth);
        localStorage.setItem("_id", res.data.id);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("lastname", res.data.user.lastname);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("countery", res.data.user.countery);
        localStorage.setItem("phone", res.data.user.phone);
        localStorage.setItem("date_birth", res.data.user.date_birth);
        localStorage.setItem("_id", res.data.user._id);
        sessionStorage.setItem("Role", res.data.user.roles);
        sessionStorage.setItem("id", res.data.id);

        console.log(res.data.user)
        router.push({
            pathname: "/",
            state: { detail: res.data.user },
        })


    } catch (error) {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL,
            payload: error,
        })
    }


}

export const modifiePassword = (id, password, newPassword) => async (dispatch) => {
    try {
        const passmod = {
            password,
            newPassword
        }
        const res = await axios.put(`/user/parameter/password/${id}`, passmod);
        dispatch({
            type: MODF_PASSWORD,
            payload: res.data._id
        })
    } catch (error) {
        alert("error modifie")
    }
}


export const edit_user = (id, username, lastname, email, phone) => async (dispatch) => {
    try {
        const userEdit = {
            username,
            lastname,
            email,
            phone,

        }
        const res = await axios.put(`/user/parameter/compte/${id}`, userEdit);
        dispatch({
            type: EDIT_USER,
            payload: res.data
        })
        localStorage.setItem("_id", res.data.user._id);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("lastname", res.data.user.lastname);
        localStorage.setItem("roles", res.data.user.roles);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("countery", res.data.user.countery);
        localStorage.setItem("date_birth", res.data.user.date_birth);
        localStorage.setItem("phone", res.data.user.phone);
    } catch (error) {
        alert("error modifie")
    }
}
