import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_teacher_groupes } from '../../../redux/action/Action_Groupe';
import GroupeCard from '../../Groupe/GroupeCard';

const TeacherGroupe = ({ users }) => {
    const [teacherid, setid] = useState(localStorage.getItem("_id"))

    const { Groupe, loading } = useSelector((state) => state.GroupeReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_teacher_groupes(teacherid));

    }, []);
    console.log(teacherid)
    return (
        <div>
            {loading ? (
                <h1> Loading</h1>
            ) :
                <div style={{display:"flex" ,flexDirection: "column",alignItems:"center" ,marginTop: "30vh",marginRight: "0vh" }}>
                    <div style={{display:"flex" , flexWrap: "wrap", alignItems:"center"}}>
                        <Link to="/Groups/add">
                            <button type="button" class="btn btn-primary" >Add Groups</button>
                        </Link>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "space-between" }}>

                        {Groupe.map((el) => (
                            <GroupeCard groupe={el} id={teacherid} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default TeacherGroupe
