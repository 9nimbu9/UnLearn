import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartDetails from "../Components/CartDetails";

function Cart(){
    const {id} = useParams()
    const [item, setItem] = useState([])
    const [cart, setCart] = useState([])
    const [bol, setBol] = useState(false)

    useEffect(() => {
        Axios.get("http://localhost:5000/signUp").then(
            (res) => {
                setItem(res.data)
                setBol(true)
            }
        )
    },[])

    if(bol){
        const found = item.filter(m => m._id==id)
        console.log(found)
        if(found!==[]){
            setCart(found[0].cart)
        }
        setBol(false)
    }

    return(
        <div>
            <h1>Cart</h1>
            {cart.map((m,index) => <CartDetails key={index} id={m._id} name={m.productName} price={m.productPrice} quantity={m.quantity}/>)}
        </div>
    )
}

export default Cart