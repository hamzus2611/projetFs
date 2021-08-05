import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getteacher } from '../../../redux/action/action_Admin';
import UserCard from '../../usercard/UserCard';

const TeacherAll = () => {
    const { Teacher, loading } = useSelector((state) => state.EditUser);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getteacher());
        console.log(Teacher)

    }, []);
    return (
        <div>
            {loading ? (
                <h1> Loading</h1>
            ) :
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "30vh", marginRight: "30vh" }}>
                    {Teacher.map((el) => (
                        <UserCard users={el} />
                    ))}
                </div>
            }
        </div>
    )
}

export default TeacherAll
