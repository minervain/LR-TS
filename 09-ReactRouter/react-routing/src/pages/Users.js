import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Users(){

    const [loading, setLoading] = useState(true);
    const [allUsers, setUsers] = useState([]);

    useEffect(()=>{
        fetch ("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .finally(() => setLoading(false));
    }, []);

    return(
        
        <>

        <h1>Users</h1>
            {loading && <h1>loading...</h1>}
            <ul>
                {allUsers.map(usr =>{
                    return(
                    <li key={usr.id}>
                        <Link to={`user/${usr.id}`}>{usr.name}</Link>
                    </li>
                    )
                })}
            </ul>
            <Outlet />
        </>
        
    )
}