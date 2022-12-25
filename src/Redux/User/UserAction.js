export const AUTH_USER = "AUTH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const AuthUser = (userData) => {
    return {
        type: AUTH_USER,
        data: userData,
    };
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER,
    };
};
