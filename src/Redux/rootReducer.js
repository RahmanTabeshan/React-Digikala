import { combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import productReducer from "./Products/ProductReducer";
import TransferReducer from "./TransferData/TransferReducer";
import UserReducer from "./User/UserReducer";

const rootReducer = combineReducers({
    Products : productReducer,
    Cart : cartReducer ,
    User : UserReducer,
    Transfer : TransferReducer,
}) ;

export default rootReducer ;