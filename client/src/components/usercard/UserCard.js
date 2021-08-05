import React from 'react'
import { Button } from 'react-bootstrap'
import './UserCard.css'

const UserCard = ({ users }) => {
    return (
        <div  className="card mx-auto ">

            <div className="UserCard" style={{ marginTop: "50" }}>
                <div className="row">
                    <div >
                        <div className="card-sl">
                            <div className="card-image">
                                <img src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-masculine-de-profil-d-%C3%A9tudiant-troisi%C3%A8me-cycle-avec-la-robe-et-le-chapeau-vecteur-plat-env-style-155031056.jpg" />
                            </div>

                            <div className="card-heading">{users.username} {users.lastname}</div>
                            <div className="card-text"> {users.email}</div>
                            <div className="card-text">{users.date_birth}</div>
                            <div className="card-text">{users.phone}</div>
                            <Button href="#" className="card-button">
                                {" "}
                                Purchase
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserCard
