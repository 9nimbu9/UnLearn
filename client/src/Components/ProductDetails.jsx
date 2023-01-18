import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails(props){
    const navigate = useNavigate()
    const {id} = useParams()
    const [bol, setBol] = useState(false)
    const [quantity, setQuantity] = useState(1)

    function quantities(event){
        setQuantity(event.target.value)
    }

    function buy(event){
        Axios.post("http://localhost:5000/cart", {name: props.name, price: props.price, addedBy: id, quantity: quantity}).then(
            (res) => {
                console.log(res.data)
                setBol(true)
            }
        ) 
        setQuantity(1)
        event.preventDefault()
    }
    
    return(
        <div>
            <input type="number" value={quantity} onChange={quantities}/>
            <span>{props.name} {props.price} <button id={props.id} onClick={buy}>Buy</button></span>
        </div>
    )
}

export default ProductDetails