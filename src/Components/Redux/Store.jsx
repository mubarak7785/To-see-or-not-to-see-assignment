import { createStore } from "redux";
import { Loginreducer } from "./Login_Redux/Login_Redux";
import { Product_reducer } from "./Product_Redux/Product_Redux";
import { combineReducers } from "redux";

const rootreducer=combineReducers({Login:Loginreducer,Product:Product_reducer})
export const store= createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
