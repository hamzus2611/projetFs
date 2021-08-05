import React from 'react'
import './AdminMenu.css'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/action/action_Register';

function AdminMenu() {
    const dispatch = useDispatch();
    const history = useHistory();
    const Logout_hanleSubmit = (e) => {
        e.preventDefault();
        dispatch(logoutUser(history));
    
    
      }
    return (
        <div >
            <div className="item2 menu">
                <Link Link to='/'>
                    <i className="fas fa-home"></i>
                    <span className="nav-item-title">Home</span>
                </Link>
                <Link to="/profile">
                    <i className="fas fa-user"></i>
                    <span className="nav-item-title">Profile</span>
                </Link>
                <Link to='/teacher'>
                    <i className="fas fa-chalkboard-teacher"></i>
                    <span className="nav-item-title">Teachers</span>
                </Link>
                <Link to="/students">
                    <i className="fas fa-user-graduate"></i>
                    <span className="nav-item-title">Students</span>
                </Link>
                <Link to="/Groups">
                    <i className="fas fa-user-friends"></i>
                    <span className="nav-item-title">Groups</span>
                </Link>
                <Link to="Messages">
                    <i className="fas fa-envelope"></i>
                    <span className="nav-item-title">Messages</span>
                </Link>
                <a href="Singout" onClick={Logout_hanleSubmit}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="nav-item-title">Signout</span>
                </a>

            </div>
        </div>
    )
}

export default AdminMenu
