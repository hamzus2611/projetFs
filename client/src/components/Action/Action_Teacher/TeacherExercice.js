import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_teacher_exercise } from '../../../redux/action/action_exercise';
import GroupeCard from '../../Groupe/GroupeCard';

const TeacherExercice = ({ users }) => {
    const [teacherid, setid] = useState(localStorage.getItem("_id"))

    const { exercises, loading } = useSelector((state) => state.exerciseReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_teacher_exercise(teacherid));

    }, []);
    console.log(teacherid)
    return (
        <div>
            {loading ? (
                <h1> Loading</h1>
            ) :
                <div style={{display:"flex" ,flexDirection: "column",alignItems:"center" ,marginTop: "30vh",marginRight: "0vh" }}>
                    <div style={{display:"flex" , flexWrap: "wrap", alignItems:"center"}}>
                        <Link to="/exercice/add">
                            <button type="button" class="btn btn-primary" >Add Exercise</button>
                        </Link>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap",justifyContent: "space-between" }}>

                        {exercises.map((el) => (
                            <GroupeCard groupe={el} id={teacherid} />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default TeacherExercice
