import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="card mx-auto" style={{ top: "50vh" }} >
            <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>

            <Link to="/addTeacher">
                <button type="button" class="btn btn-primary" >Add Teachers</button>
            </Link>
            <Link to="/addAdmin">
                <button type="button" class="btn btn-primary">Add Admin</button>
            </Link>
        </div>

        </div >
    )
}

export default Home
