import { combineReducers } from "redux";
import productReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
    Products : productReducer,
}) ;

export default rootReducer ;