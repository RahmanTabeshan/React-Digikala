export const AUTH_USER = "AUTH_USER";;

export const AuthUser = (userData) => {
    return {
        type: AUTH_USER,
        data: userData,
    };
};
