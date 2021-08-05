import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getstudent } from '../../../redux/action/action_Admin';
import UserCard from '../../usercard/UserCard';

const StudentAll = () => {
    const { Students, loading } = useSelector((state) => state.EditUser);
    //const { Students, loading } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getstudent());
        console.log(Students)

    }, []);
    return (
        <div>
            {loading ? (
                <h1> Loading</h1>
            ) :
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "30vh", marginRight:"30vh" }}>

                    {Students.map((el, index) => (
                        <UserCard users={el} key={index} />
                    ))}
                </div>
            }
        </div>
    )
}

export default StudentAll
