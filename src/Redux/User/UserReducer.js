import { AUTH_USER} from "./UserAction";

const initialState = null;

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER: {
            let user = {...state};
            user = {...action.data};
            return user;
        }
        default:
            return state ;
    }
};

export default UserReducer;
