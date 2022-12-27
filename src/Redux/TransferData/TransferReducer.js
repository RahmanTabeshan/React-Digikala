const ADD_DATA = "ADD_DATA";
const REMOVE_DATA = "REMOVE_DATA";

const initialState = false;

const TransferReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA: {
            const newState = true;
            return newState;
        }

        case REMOVE_DATA: {
            const newState = false;
            return newState;
        }

        default:
            return state;
    }
};

export default TransferReducer;

export const addData = () => {
    return {
        type: ADD_DATA,
    };
};
export const removeData = () => {
    return {
        type: REMOVE_DATA,
    };
};
