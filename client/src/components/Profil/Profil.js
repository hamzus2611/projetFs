import React from 'react'
import EditUser from './EditUser';
import PasswordUser from './PasswordUser';
const Profil = ({users}) => {

 
    return (
        <div className="card mx-auto " style={{ width: "18rem", top: "50px" ,backgroundColor:"#F3CB83" }}>
            <img src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg" className="card-img-top mx-auto" style={{ width:"200px", borderRadius:"70%" }}alt="Profile user" />
            <ul className="list-group list-group-flush">
                <li style={{position:"unset"}}><EditUser users={users} /></li>
                <li className="list-group-item">{users.username}</li>
                <li className="list-group-item">{users.lastname}</li>
                <li className="list-group-item">{users.email}</li>
                <li className="list-group-item">{users.phone}</li>
                <li className="list-group-item">{users.countery}</li>
                <li className="list-group-item">{users.date_birth}</li>
            </ul>
            <h4 style={{position:"unset" ,display:"inline-flex", justifyContent:"space-between"} }><PasswordUser users={users} /> Modifie Password</h4>

        </div>

    )
}

export default Profil
