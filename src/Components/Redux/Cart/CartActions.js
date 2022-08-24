export const ADD_TO_CART = "ADD_TO_CART" ;
export const REMOVE = "REMOVE" ;
export const INCREMENT = "INCREMENT" ;
export const DECREMENT = "DECREMENT" ;

export const addToCart = (product)=>{
    return {
        type:ADD_TO_CART ,
        Product:product ,
    }
}

export const increment = (id) => {
    return {
        type:INCREMENT,
        ProductId:id,
    }
}

export const decrement = (id) => {
    return {
        type:DECREMENT,
        ProductId:id,
    }
}

export const remove = (id) => {
    return {
        type:REMOVE,
        ProductId:id,
    }
}
