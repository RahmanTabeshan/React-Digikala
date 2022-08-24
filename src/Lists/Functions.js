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

export function sortArray(Array,numSort=2){
    const array = [] ;
    Array.forEach((item,index) => {
        if(index === 0 ){
            array[0] = [item]
        }else if( index % numSort === 0 ){
            array.push([item]) ;
        }else{
            array.forEach(p =>{
                if(p.length < numSort ){
                    p.push(item) ;
                }
            })
        }
    })
    return array ;
}

export function scrollToTop(){
    return(
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth",
        }) 
        ||
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    )
}
