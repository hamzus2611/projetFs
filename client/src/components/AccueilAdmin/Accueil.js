import "./Accueil.css";
import NavBar from "../navBar/NavBar";
import Profil from "../Profil/Profil";
import StudentAll from "../Action/Action_Admin/StudentAll";
import TeacherAll from "../Action/Action_Admin/TeacherAll";
import AdminMenu from "../Action/Action_Admin/AdminMenu";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
//const Accueil = ({ user })=>
import React, { Component } from 'react'
import StudentMenu from "../Action/Action_Student/StudentMenu";
import TeacherMenu from "../Action/Action_Teacher/TeacherMenu";
import TeacherGroupe from "../Action/Action_Teacher/TeacherGroupe";
import GroupeALL from "../Action/Action_Admin/GroupeAll";
import AddTeacher from "../Action/Action_Admin/AddTeacher";
import AddAdmin from "../Action/Action_Admin/AddAdmin";
import Home from "../Action/Action_Admin/Home";
import ADDGroupe from "../Action/Action_Teacher/ADDGroupe";
import TeacherExercice from "../Action/Action_Teacher/TeacherExercice";
import StudentGroupe from "../Action/Action_Student/StudentGroupe";
export default class Accueil extends Component {

  componentWillUnmount() {
    var user = this.props.user;

  }

  render() {

    var user = this.props.user;
    const isAuth = window.sessionStorage.getItem('isAuth');
    const Role = window.sessionStorage.getItem('Role');

    return (


      <Router>
        <Switch>



          <Route path="/user/signin" component={SignIn} exact />
          <Route path="/user/signup" component={SignUp} exact />
          {(!isAuth) ? <Redirect to="/user/signin" /> : null}


          <div >
            <NavBar users={user} className="item1" />

            {(Role === "ROLE_ADMIN") ?


              <div className="grid-container">
                <AdminMenu />

                <div className="item3 " >

                  <Route path="/addTeacher" component={AddTeacher} />
                  <Route path="/" component={Home} exact />
                  <Route path="/addAdmin" component={AddAdmin} />
                  <Route path="/Groups" component={() => <GroupeALL users={user} />} />
                  <Route path="/students/" component={StudentAll} exact />
                  <Route path="/Teacher" component={TeacherAll} exact />

                  {/* <Route path="/profile/" component={Profil} exact /> */}
                  <Route path='/profile' component={() => <Profil users={user} />} />
                </div>
              </div>





              : (Role === "ROLE_STUDENT") ?
                <div className="grid-container">

                  <StudentMenu />

                  <div className="item3" >
                    <Route path="/" component={GroupeALL} exact />
                    <Route path="/students/" component={StudentAll} exact />
                    <Route path="/Teacher/" component={TeacherAll} exact />
                    <Route path="/Groups/" component={StudentGroupe} exact />

                    {/* <Route path="/profile/" component={Profil} exact /> */}
                    <Route path='/profile' component={() => <Profil users={user} />} />
                  </div>
                </div>




                : (Role === "ROLE_TEACHER") ?

                  <div className="grid-container">

                    <TeacherMenu />

                    <div className="item3" >

                      <Route path="/students/" component={StudentAll} exact />
                      <Route path="/Teacher/" component={TeacherAll} exact />
                      <Route path="/Groups" component={TeacherGroupe} exact />
                      <Route path="/Groups/add" component={ADDGroupe} exact />
                      <Route path="/exercice" component={TeacherExercice} exact />

                      {/* <Route path="/profile/" component={Profil} exact /> */}
                      <Route path='/profile' component={() => <Profil users={user} />} />
                    </div>
                  </div>

                  : null
            }
          </div>
        </Switch>
      </Router>
    )
  }

}

// export { Accueil };
