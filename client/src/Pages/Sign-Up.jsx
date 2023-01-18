import React, { useEffect, useState } from "react";
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

let userId

function SignUp(){
    var {id} = useParams
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [bol, setBol] = useState(false)

    function userName(event){
        setName(event.target.value)
    }
    function userEmail(event){
        setEmail(event.target.value)
    }function userPassword(event){
        setPassword(event.target.value)
    }
 
    function formSubmit(event){
        event.preventDefault()
        Axios.post("http://localhost:5000/signUp", {name: name, email: email, password: password}).then(
            (res) => {
                console.log(res.status)
                if(res.status===200){
                    userId = res.data
                    setBol(true)
                }
            }
        )
        setName("")
        setEmail("")
        setPassword("")
    }

    useEffect(() => {
        if(bol){
            setBol(false)
            id=userId
            navigate("/home/"+id, {
                state: {
                    loggedIn: userId
                }
            })
        }
    })


    return(
        <form onSubmit={formSubmit}>
            <input type="text" value={name} onChange={userName} placeholder="Name"/>
            <input type="text" value={email} onChange={userEmail} placeholder="Email"/>
            <input type="text" value={password} onChange={userPassword} placeholder="Password"/>
            <button>Submit</button>
        </form>
    )
}

export default SignUp