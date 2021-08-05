import React from 'react'
import { useDispatch } from 'react-redux';
import { request_add } from '../../redux/action/Action_Groupe';
import './GroupeCarde.css'
function GroupeCard({ groupe, id }) {
    console.log(id)
    const dispatch = useDispatch()
    const join_hanleSubmit = (e) => {
        e.preventDefault();
        dispatch(request_add(groupe._id,id));

    }
    return (
        <div className="card mx-auto ">

            <div className="UserCard" style={{ marginTop: "50" }}>
                <div className="row">
                    <div className="card__content">
                        <h3 className="card__header">{groupe.Name_Groupe}</h3>
                        <h3 className="card__header">prof : {groupe.Prof}</h3>
                        <p className="card__info">{groupe.matieres}</p>
                        <p className="card__info">{groupe.Level}</p>
                        <p className="card__info">{groupe.students_number}</p>

                        <button className="card__button" onClick={join_hanleSubmit}>join this group</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupeCard
