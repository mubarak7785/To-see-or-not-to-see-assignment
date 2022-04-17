import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import './Teachers.css'
import { Navigate, useNavigate } from "react-router-dom";
import { TEACHER_Action } from "../Redux/Teacher_Redux/Teachers_Action";

export const Teachers=()=>{
const auth=useSelector(store=>store.Login.user);
const navigate=useNavigate();
useEffect(()=>{
    if(!auth)
    navigate("/login")
},[])  


const dispatch=useDispatch();

//    const pdata=useSelector(store=>store.Product.products)
     
   return(
       <div>

       </div>
   )
}