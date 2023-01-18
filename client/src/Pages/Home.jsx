import React, { useEffect, useState } from "react";
import Axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";

function Home(){
    const location = useLocation()
    const {id} = useParams()
    const [name, setName] = useState([])
    const [bol, setBol] = useState(true)
    const [products, setProducts] = useState([])

    if(bol){
        Axios.get("http://localhost:5000/signUp").then(
            (res) => {
                setName(res.data)
                setBol(false)
            }
        )
    }

    useEffect(() => {
        Axios.get("http://localhost:5000/showProducts").then(
            (res) => {
                setProducts(res.data)
            }
        )
    },[])
    

    return( 
        <div>
            <p>Hello</p>
            {name.map(m => {
                if(m._id===id){
                    return(<span key={m._id}>{m.name}</span>)
                }
            })}
            <a href={"/cart/"+id}>Cart</a>
            <h2>Products</h2>
            {products.map(m => <ProductDetails key={m._id} id={m._id} name={m.productName} price={m.productPrice}/>)}
            <Link to="/"><button>Log Out</button></Link>
        </div>
    )
}

export default Home