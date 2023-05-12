import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function User(prams){
    const [kullanici, setKullanici] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => data.json())
        .then(kk => setKullanici(kk));
    },[])

    console.log(kullanici)
    
    return(
    <div>
        <h1>User ID: {id} </h1>
        <h1>User Name: {kullanici.name}</h1>
        <h1>User Username: {kullanici.username}</h1>
        <h1>User Email: {kullanici.email}</h1>
    </div>
    )
}

<h2>useFormik</h2>
