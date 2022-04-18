import { GET_PRODUCTS } from "./Product_Action";

const initstate={products:[]}

export const Product_reducer=(store=initstate,{type,payload})=>{
     console.log("j",payload)
   switch(type){

       case GET_PRODUCTS:{
           return{...store,products:payload}
       }

       default:{
           return store;
       }
   }

} 

