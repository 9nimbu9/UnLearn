import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./Pages/Main";
import SignIn from "./Pages/Sign-In";
import SignUp from "./Pages/Sign-Up";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/home/:id" element={<Home/>}/>
                <Route exact path="/Sign-In" element={<SignIn/>}/>
                <Route exact path="/Sign-Up" element={<SignUp/>}/>
                <Route exact path="/cart/:id" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    ) 
}

export default App

