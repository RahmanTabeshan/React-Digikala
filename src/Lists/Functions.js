export function money_format(num) {
    var str = num.toString();
    if (str && str.length > 3) {
        str = str.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    return str;
}

export function orginal_format(num) {
    num = num.replaceAll(",", "");
    return num;
}

export function sortArray(Array, numSort = 2) {
    const array = [];
    Array.forEach((item, index) => {
        if (index === 0) {
            array[0] = [item];
        } else if (index % numSort === 0) {
            array.push([item]);
        } else {
            array.forEach((p) => {
                if (p.length < numSort) {
                    p.push(item);
                }
            });
        }
    });
    return array;
}

export function scrollToTop() {
    return (
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        }) ||
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    );
}

export function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function removeArrayItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export const EmailRegex = new RegExp(
    /[a-zA-z0-9]@(gmail|yahoo|hotmail)(.com)$/
);
export const PhoneRegex = new RegExp(
    /^(09)(0[1-5]|[1-3]\d|2[0-2]|9[0-3])\d{7}$/
);
