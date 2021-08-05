// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { BrowserRouter, Redirect, useHistory } from 'react-router-dom';
// import { login, register } from '../../redux/action/action_Register';
// import './signup.css';
// const SignUp = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordr, setPasswordr] = useState("");
//     const [lastname, setLastname] = useState("");

//     const dispatch = useDispatch();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         password === passwordr ?
//             dispatch(register({ username, lastname, email, password, phone })) :
//             alert("Verify your password");
//     };
//     const history = useHistory();
//     // const verifiesubmit  = (e) => {
//     //     const isAuth = sessionStorage.getItem("")
//     //     e.preventDefault();
//     //     if (isAuth === "true") {
//     //         <Redirect to="/" />
//     //     }
//     // }
//     const isAuth = () => {
//         if (window !== 'undefined') {
//          const cookieChecked = sessionStorage.getItem("isAuth")
//             if (cookieChecked=="true") {
//                 if (localStorage.getItem('_id')) {
//                     return true;
//                 } else {
//                     return false;
//                 }
//             }
//         }
//     };
//     const Login_hanleSubmit = (e) =>{
//         e.preventDefault();
//         dispatch(login({ email, password }));
//         if (isAuth()) {
//              history.push("/")
//         }

//     }
//     return (
//         <BrowserRouter>
//             <div className="row">
//                 {isAuth() ? <Redirect to="/" /> : null}
//                 <div className="col-md-6 mx-auto p-0">
//                     <div className="card">
//                         <div className="login-box">
//                             <div className="login-snip">

//                                 <input
//                                     id="tab-1"
//                                     type="radio"
//                                     name="tab"
//                                     className="sign-in"
//                                     defaultChecked
//                                 />
//                                 <label htmlFor="tab-1" className="tab">
//                                     Login
//                                 </label>
//                                 <input id="tab-2" type="radio" name="tab" className="sign-up" />
//                                 <label htmlFor="tab-2" className="tab">
//                                     Sign Up
//                                 </label>
//                                 <form className="login-space">
//                                     <div className="login">
//                                         <div className="group">

//                                             <label htmlFor="user" className="label">
//                                                 Username
//                                             </label>
//                                             <input
//                                                 id="user"
//                                                 type="text"
//                                                 className="input"
//                                                 placeholder="Enter your username"
//                                                 value={email} onChange={(e) => setEmail(e.target.value)}

//                                             />
//                                         </div>
//                                         <div className="group">
//                                             <label htmlFor="pass" className="label">
//                                                 Password
//                                             </label>
//                                             <input
//                                                 id="pass"
//                                                 type="password"
//                                                 className="input"
//                                                 data-type="password"
//                                                 placeholder="Enter your password"
//                                                 value={password} onChange={(e) => setPassword(e.target.value)}

//                                             />

//                                         </div>
//                                         <div className="group">

//                                             <input
//                                                 id="check"
//                                                 type="checkbox"
//                                                 className="check"
//                                                 defaultChecked
//                                             />
//                                             <label htmlFor="check">
//                                                 <span className="icon" /> Keep me Signed in
//                                             </label>
//                                         </div>
//                                         <div className="group">

//                                             <input
//                                                 type="submit"
//                                                 className="button"
//                                                 defaultValue="Sign In"
//                                                 onClick={Login_hanleSubmit}

//                                             />


//                                         </div>
//                                         <div className="hr" />
//                                         <div className="foot">

//                                             <h6>Forgot Password?</h6>
//                                         </div>
//                                     </div>
//                                     <div className="sign-up-form">
//                                         <div className="group">

//                                             <label htmlFor="user" className="label">
//                                                 Firstname
//                                             </label>
//                                             <input
//                                                 id="user"
//                                                 type="text"
//                                                 className="input"
//                                                 placeholder="Create your Firstname"
//                                                 value={username} onChange={(e) => setUsername(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="group">

//                                             <label htmlFor="user" className="label">
//                                                 Lastname
//                                             </label>
//                                             <input
//                                                 id="user"
//                                                 type="text"
//                                                 className="input"
//                                                 placeholder="Create your Lastname"
//                                                 value={lastname} onChange={(e) => setLastname(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className="group">

//                                             <label htmlFor="pass" className="label">
//                                                 Password
//                                             </label>
//                                             <input
//                                                 id="pass"
//                                                 type="password"
//                                                 className="input"
//                                                 data-type="password"
//                                                 placeholder="Create your password"
//                                                 value={password} onChange={(e) => setPassword(e.target.value)}

//                                             />
//                                         </div>
//                                         <div className="group">

//                                             <label htmlFor="pass" className="label">
//                                                 Repeat Password
//                                             </label>
//                                             <input
//                                                 id="pass"
//                                                 type="password"
//                                                 className="input"
//                                                 data-type="password"
//                                                 placeholder="Repeat your password"
//                                                 value={passwordr} onChange={(e) => setPasswordr(e.target.value)}

//                                             />
//                                         </div>
//                                         <div className="group">

//                                             <label htmlFor="pass" className="label">
//                                                 Email Address
//                                             </label>
//                                             <input
//                                                 id="pass"
//                                                 type="text"
//                                                 className="input"
//                                                 placeholder="Enter your email address"
//                                                 value={email} onChange={(e) => setEmail(e.target.value)}

//                                             />
//                                         </div>
//                                         <div className="group">

//                                             <label htmlFor="pass" className="label">
//                                                 phone
//                                             </label>
//                                             <input
//                                                 id="pass"
//                                                 type="text"
//                                                 className="input"
//                                                 placeholder="Enter your phone number"
//                                                 value={phone} onChange={(e) => setPhone(e.target.value)}

//                                             />
//                                         </div>






//                                         <div className="group">


//                                             <input
//                                                 type="submit"
//                                                 className="button"
//                                                 defaultValue="Sign Up"
//                                                 onClick={handleSubmit}


//                                             />
//                                         </div>
//                                         <div className="hr" />
//                                         <div className="foot">

//                                             <label htmlFor="tab-1">Already Member?</label>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >

//         </BrowserRouter>
//     )
// }

// export default SignUp