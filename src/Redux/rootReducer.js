import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productReducer from "./Products/ProductReducer";
import UserReducer from "./User/UserReducer";

const rootReducer = combineReducers({
    Products : productReducer,
    Cart : cartReducer ,
    User : UserReducer,
}) ;

export default rootReducer ;