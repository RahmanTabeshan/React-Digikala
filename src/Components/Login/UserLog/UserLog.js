/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Image/logo.svg";
import { EmailRegex, PhoneRegex } from "../../../Lists/Functions";
import Modal from "../Modal/Modal";

const UserLog = ({ setUserName }) => {
    const userInput = useRef();
    const [user, setUser] = useState({ name: "", type: "" });
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);

    const validation = (value) => {
        if (!value) {
            setError("شماره موبایل یا ایمیل خود را وارد کنید");
            return false;
        } else if (!PhoneRegex.test(value) && !EmailRegex.test(value)) {
            setError("شماره موبایل یا ایمیل خود را به درستی وارد کنید");
            return false;
        } else {
            setError("");
            return true;
        }
    };

    const changeHandle = (e) => {
        if (EmailRegex.test(e.target.value)) {
            setUser({ name: e.target.value, type: "Email" });
        } else if (PhoneRegex.test(e.target.value)) {
            setUser({ name: e.target.value, type: "Phone" });
        } else {
            setUser({ name: e.target.value });
        }
    };

    const submitHandle = (e) => {
        e.preventDefault();
        if (validation(user.name)) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            if (user.type === "Email") {
                const existUser = users.find((u) => u.Email === user.name);
                if (existUser) {
                    setUserName(user);
                } else {
                    setModal(true);
                    setTimeout(() => {
                        setModal(false);
                    }, 5200);
                }
            } else if (user.type === "Phone") {
                const existUser = users.filter((u) => u.phone === user.name);
                if (existUser.length) {
                    const pass = existUser.find((user) => user.Password);
                    if (pass) {
                        setUserName({ ...user, validate: true, pass: true });
                    } else {
                        setUserName({ ...user, validate: true });
                    }
                } else {
                    setUserName(user);
                }
            }
        } else {
            return false;
        }
    };

    useEffect(() => {
        userInput.current.focus();
    }, []);

    return (
        <React.Fragment>
            {modal ? (
                <Modal
                    message="حساب کاربری با مشخصات وارد شده وجود ندارد. لطفا از شماره تلفن همراه
            برای ساخت حساب کاربری استفاده نمایید."
                />
            ) : (
                ""
            )}
            <div className="flex flex-col border border-neutral-200 rounded-lg m-5 p-5 lg:p-8">
                <div className="flex justify-center">
                    <Link to="/" className="w-[150px] h-[40px]">
                        <img
                            src={Logo}
                            alt="digikala logo"
                            className="w-full object-contain"
                        />
                    </Link>
                </div>
                <div className="mt-5">
                    <p className="w-max font-bold text-xl">ورود | ثبت‌نام</p>
                </div>
                <div className="mt-6 mb-5 text-xs text-neutral-600">
                    <p>سلام!</p>
                    <p className="mt-3">
                        لطفا شماره موبایل یا ایمیل خود را وارد کنید
                    </p>
                </div>
                <div className="w-full">
                    <form
                        className="flex flex-col items-center"
                        onSubmit={submitHandle}
                    >
                        <div className="w-full flex flex-col">
                            <input
                                type="text"
                                className={`w-full h-12 border ${
                                    error ? "border-red-500" : "border-blue-400"
                                } rounded-lg text-base text-neutral-700 font-normal px-4 py-2 font-sego`}
                                autoComplete="false"
                                // onFocus={()=>setError("")}
                                onBlur={() => validation(user.name)}
                                onChange={changeHandle}
                                value={user.name}
                                ref={userInput}
                            />
                            {error ? (
                                <span className="text-xs text-red-700 mt-2">
                                    {error}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-sm font-bold text-white rounded-lg mt-8 px-4 py-3.5"
                            disabled={modal ? true : false}
                        >
                            ورود
                        </button>
                    </form>
                </div>
                <p className="flex text-[11px] text-neutral-700 mt-5">
                    ورود شما به معنای پذیرش
                    <Link to="/" className="mx-1 text-blue-500">
                        شرایط دیجی‌کالا
                    </Link>
                    و
                    <Link to="/" className="mx-1 text-blue-500">
                        قوانین حریم‌خصوصی
                    </Link>
                    است
                </p>
            </div>
        </React.Fragment>
    );
};

export default UserLog;
