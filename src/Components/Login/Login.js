import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { random } from "../../Lists/Functions";
import { addData } from "../../Redux/TransferData/TransferReducer";
import { AuthUser } from "../../Redux/User/UserAction";
import Code from "../Common/Code/Code";
import useCookie from "../Common/useCookies/useCookies";
import UserLog from "./UserLog/UserLog";
import UserPass from "./UserPass/UserPass";

const Login = () => {
    const [userName, setUserName] = useState("");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie] = useCookie();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userNotExistValid = () => {
        const user = { id: random(0, 100000000000), phone: userName.name };
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/users/welcome/");
        dispatch(addData()) ;
        setTimeout(() => {
            setCookie("user", user.id, {
                path: "/",
                sameSite: "lax",
                expire: 1000 * 60 * 60 * 24 * 2,
            });
            dispatch(AuthUser(user));
        }, 500);
    };

    const passNotExistValid = () => {
        const user = users.find((u) => u.phone === userName.name);
        navigate("/");
        setTimeout(() => {
            setCookie("user", user.id, {
                path: "/",
                sameSite: "lax",
                expire: 1000 * 60 * 60 * 24 * 2,
            });
            dispatch(AuthUser(user));
        }, 500);
    };

    const passExistValid = () => {
        const user = users.find((u) => u.phone === userName.name);
        const { Password, ...userAuth } = user;
        navigate("/") ;
        setTimeout(() => {
            setCookie("user", user.id, {
                path: "/",
                sameSite: "lax",
                expire: 1000 * 60 * 60 * 24 * 2,
            });
            dispatch(AuthUser(userAuth));
        }, 500);
    };

    if (userName) {
        if (userName.type === "Email") {
            return <UserPass userName={userName} setUserName={setUserName} />;
        } else {
            if (userName.validate) {
                if (userName.pass) {
                    if (userName.code) {
                        return (
                            <Code
                                userName={userName}
                                setUserName={setUserName}
                                validCode={passExistValid}
                            />
                        );
                    } else {
                        return (
                            <UserPass
                                userName={userName}
                                setUserName={setUserName}
                            />
                        );
                    }
                } else {
                    return (
                        <Code
                            userName={userName}
                            setUserName={setUserName}
                            validCode={passNotExistValid}
                        />
                    );
                }
            } else {
                return (
                    <Code
                        userName={userName}
                        setUserName={setUserName}
                        validCode={userNotExistValid}
                    />
                );
            }
        }
    } else {
        return <UserLog setUserName={setUserName} />;
    }
};

export default Login;
