import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_all_groupes } from '../../../redux/action/Action_Groupe';
import GroupeCard from '../../Groupe/GroupeCard';

const GroupeALL = ({users}) => {
    const [id, setid] = useState(localStorage.getItem("_id"))

    const { Groupe, loading } = useSelector((state) => state.GroupeReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_all_groupes());
        
    }, []);
    console.log(Groupe)
    return (
        <div>
            {loading ? (
                <h1> Loading</h1>
            ) :
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "30vh", marginRight: "30vh" }}>
                    {Groupe.map((el) => (
                        <GroupeCard groupe={el} id={id} />
                    ))}
                </div>
            }
        </div>
    )
}

export default GroupeALL
