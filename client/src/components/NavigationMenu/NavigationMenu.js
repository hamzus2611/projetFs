import React, { Component } from 'react'

export default class NavigationMenu extends Component {
    render() {
        return (
            <div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-home"></i>
                    <span className="nav-item-title">Home</span>
                </div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <span className="nav-item-title">Teachers</span>
                </div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-user-graduate"></i>
                    <span className="nav-item-title">Students</span>
                </div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-user-friends"></i>
                    <span className="nav-item-title">Groups</span>
                </div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-cog"></i>
                    <span className="nav-item-title">Setting</span>
                </div>
                <div className="nav-item nav-itemC">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="nav-item-title">Signout</span>
                </div>
            </div>
        )
    }
}
