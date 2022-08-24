import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
    Products : productReducer,
    Cart : cartReducer ,
}) ;

export default rootReducer ;