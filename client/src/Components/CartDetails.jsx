import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CartDetails(props){
    const {id} = useParams()

    function deleteItem(event){
        Axios.post("http://localhost:5000/delete", {deleteId: event.target.id, userId:id}).then(
            (res) => {
                console.log(res)
            }
        ).catch(err => {console.log(err)})
    }

    return(
        <form>
            <span>{props.name} {props.price} {props.quantity}</span>
            <button id={props.id} onClick={deleteItem}>Delete</button>
        </form>
    )
}

export default CartDetails