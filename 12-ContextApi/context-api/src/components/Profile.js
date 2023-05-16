import { useContext, useState } from "react";

import userTheme from "../context/UserContext";

export default function Profile(){

    const {user, setUser} = userTheme();

    const [loading, setLoading] = useState(false);


    
    function handleLogin(){
        setLoading(true);
        setTimeout(() =>{
            setUser({id:1, username:"okbkagan", pass:123})
            setLoading(false);
        }, 1500) 
    } 

    function handleLogout(){
        setLoading(true);
        setTimeout(() =>{
            setUser(null)
            setLoading(false)
        }, 1500)
        
    }
    return(
        <div>
        {
            !user && <button onClick={handleLogin}>{loading ? "Loading.." : "Log In"}</button>
        }
            
            <br />
            <code>
                {JSON.stringify(user)}
            </code>
            <br />
            {
                user && <button onClick={handleLogout}>{loading ? "Waiting" : "Log out"}</button>
            }
        </div>
    )
}