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
