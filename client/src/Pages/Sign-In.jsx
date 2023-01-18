import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

let userId

function SignIn(){
    var {id} = useParams()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [found, setFound] = useState(false)

    function userEmail(event){
        setEmail(event.target.value)
    }function userPassword(event){
        setPassword(event.target.value)
    }

    function formSubmit(event){
        Axios.post("http://localhost:5000/signIn", {email: email, password: password}).then(
            (res) => {
                console.log(res.data)
                if(res.data!==404){
                    userId = res.data
                    setFound(true)
                }
            }
        )
        event.preventDefault()
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if(found){
            setFound(false)
            id = userId
            navigate("/home/"+id, {
                state: {
                    loggedIn: userId
                }
            })
        }
    })

    return(
        <form onSubmit={formSubmit}>
            <input type="text" value={email} onChange={userEmail} placeholder="Email"/>
            <input type="text" value={password} onChange={userPassword} placeholder="Password"/>
            <button>Submit</button>
        </form>
    )
}

export default SignIn 