/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

const CountDown = ({
    hours,
    minutes,
    seconds,
    endMessage = "",
    endClass,
    onEnded,
    onStart,
    onChangeTime,
    seperator = ":",
}) => {
    const timer = JSON.parse(localStorage.getItem("timer")) || {};
    const date = new Date();
    const nowSeconds = date.getSeconds();
    const nowMinutes = date.getMinutes();
    const nowHours = date.getHours();
    let expireSecond, expireMinute, expireHour;
    if (timer.expire) {
        date.setTime(timer.expire);
        expireSecond = date.getSeconds() - nowSeconds;
        expireMinute = date.getMinutes() - nowMinutes;
        expireHour = date.getHours() - nowHours;
    }
    if (expireSecond < 0) {
        expireSecond = 60 + expireSecond;
        expireMinute--;
    }
    if (expireMinute < 0) {
        expireMinute = expireMinute + 60;
        expireHour--;
    }
    if (expireHour < 0) {
        expireHour = expireHour + 60;
    }

    const newHour = timer.expire ? expireHour : hours;
    const newMinute = timer.expire ? expireMinute : minutes;
    const newSecond = timer.expire ? expireSecond : seconds;

    const [hour, setHour] = useState(parseInt(newHour));
    const [minute, setMinute] = useState(parseInt(newMinute));
    const [second, setSecond] = useState(parseInt(newSecond));

    const [end, setEnd] = useState(false);

    const count = useRef();

    if (second < 0) {
        if (minute === 0) {
            if (hour) setHour(hour - 1);
            setMinute(59);
            setSecond(59);
        } else {
            setMinute(minute - 1);
            setSecond(59);
        }
    }

    if (onChangeTime) {
        onChangeTime(timer);
    }

    useEffect(() => {
        if (seconds) {
            count.current = setInterval(() => {
                setSecond((state) => state - 1);
            }, 1000);
        }

        let expireSecond,
            expireMinute,
            expireHour = 0;
        if (seconds) {
            expireSecond = parseInt(seconds) * 1000;
        }
        if (minutes) {
            expireMinute = parseInt(minutes) * 60000;
        }
        if (hours) {
            expireHour = parseInt(hours) * 3600000;
        }
        const expire = expireSecond + expireMinute + expireHour;
        const expireTime = Date.now() + expire;

        if (!timer.expire || timer.expire < Date.now()) {
            localStorage.setItem(
                "timer",
                JSON.stringify({ expire: expireTime })
            );
        }

        if (onStart) {
            onStart(expireTime);
        }
        setTimeout(() => {
            localStorage.removeItem("timer");
        }, expire);
    }, []);

    useEffect(() => {
        if (
            second === 0 &&
            ((minute === 0 && hour === 0) || (minute === 0 && !hour) || !minute)
        ) {
            clearInterval(count.current);
            setEnd(true);
            if (onEnded) {
                onEnded();
            }
        }
    }, [second, minute, hour]);

    return (
        <div>
            {end && endMessage ? (
                <div className={endClass || "end-message"}>{endMessage}</div>
            ) : (
                <>
                    <div>
                        {hours && minutes && seconds ? (
                            <>
                                {hour < 10 ? `0${hour}` : hour}
                                <span>{seperator}</span>
                            </>
                        ) : (
                            ""
                        )}
                        {minutes && seconds ? (
                            <>
                                {minute < 10 ? `0${minute}` : minute}
                                <span>{seperator}</span>
                            </>
                        ) : (
                            ""
                        )}
                        {seconds ? (second < 10 ? `0${second}` : second) : ""}
                    </div>
                </>
            )}
        </div>
    );
};

export default CountDown;
