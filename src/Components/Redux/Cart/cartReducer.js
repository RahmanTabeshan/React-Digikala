import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE } from "./CartActions";

const initialState = JSON.parse(localStorage.getItem("cart")) || [] ;

const cartReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:{
            localStorage.setItem("cart" , JSON.stringify([...state , action.Product]))
            return [...state , action.Product] ;
        }
        case REMOVE :{
            const newState = [...state] ;
            const filteredState = newState.filter(item=>item.id !== parseInt(action.ProductId))
            localStorage.setItem("cart" , JSON.stringify(filteredState)) ;
            return filteredState ;
        } 
        case INCREMENT :{
            const newState = [...state] ;
            const Index = newState.findIndex(item => item.id === parseInt(action.ProductId)) ;
            
            const product = {...newState[Index]} ;
            product.quantity++ ;

            newState[Index] = product ;

            localStorage.setItem("cart" , JSON.stringify(newState)) ;
            return newState ;
        } 
        case DECREMENT :{
            const newState = [...state] ;
            const Index = newState.findIndex(item => item.id === parseInt(action.ProductId)) ;
            
            const product = {...newState[Index]} ;
            product.quantity-- ;

            newState[Index] = product ;

            localStorage.setItem("cart" , JSON.stringify(newState)) ;
            return newState ;
        } 
        default:
            return state ;
    }
}

export default cartReducer ;