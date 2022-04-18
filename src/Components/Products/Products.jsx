import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Product_Action } from "../Redux/Product_Redux/Product_Action";
import { useSelector } from "react-redux";
import './Products.css'
import {  useNavigate } from "react-router-dom";

export const Products=()=>{
const auth=useSelector(store=>store.Login.user);
const navigate=useNavigate();
useEffect(()=>{
    if(!auth)
    navigate("/login")
},[])  
const dispatch=useDispatch();

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(Response=>Response.json()).then(data=>dispatch(Product_Action(data)))
    },[])
   const pdata=useSelector(store=>store.Product.products)
     
   return(
       <div>
        {pdata.map((elem)=>{
            return<div className="s">
                 <img src={elem.image} className="image"/>
                <p>{elem.category}</p>
                <p>{elem.description}</p>
                 <hr/>
            </div>
        })}
       </div>
   )
}