import "./Navigation.css" ;
import { FaBars } from "react-icons/fa" ;
import { GrLocation } from "react-icons/gr" ;
import { useEffect , useRef , useState} from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive" ;
import MegaNav from "../Mega-Nav/MeagaNav";

const Navigation = () => {

    const isShow = useMediaQuery({minWidth:1074 }) ;

    const [scroll , setScroll] = useState(false) ;
    const [megaNav , setMegaNav] = useState(false) ;
    

    const nav = useRef()
    const navList = useRef() ;
    const bottomListHover = useRef()
    const topListHover = useRef()
    const category = useRef() ;

    useEffect(()=>{
        const navItem = navList.current.childNodes ;
        const bottomHover = bottomListHover.current ;
        const topHover = topListHover.current ;
        navItem.forEach( li =>{
                li.addEventListener("mouseenter" , (e)=>{
                    let itemWidth = e.target.clientWidth ;
                    let itemLeft = e.target.offsetLeft + 1 ;
                    bottomHover.style.width = itemWidth+"px" ;
                    bottomHover.style.transform = "scalex(1)" ;
                    bottomHover.style.left = itemLeft+"px" ;
                    topHover.style.width = itemWidth+"px" ;
                    topHover.style.transform = "scalex(1)" ;
                    topHover.style.left = itemLeft+"px" ;
                    if(e.target.classList.contains("category")){
                        setMegaNav(true)
                    }
                })
                li.addEventListener("mouseleave" , (e)=>{
                    bottomHover.style.transform = "scalex(0)" ;
                    topHover.style.transform = "scalex(0)" ;
                    if(e.target.classList.contains("category")){
                        setMegaNav(false)
                    }
                })
        })
        let scroll = [] ;
        window.addEventListener("scroll" , ()=> {
            let scrollTop = document.documentElement.scrollTop ;
            scroll.push(scrollTop) ;
            scroll = scroll.slice(scroll.length-2) ;
            if(scroll.length > 1){
                const delta = scroll[1]-scroll[0] ;
                if(delta > 0){
                    setScroll(true);
                }else{
                    setScroll(false);
                }
            }
        }) ;

    },[])

    return (
        <nav className={`navigation ${scroll ? "translate" : ""}`} ref={nav}>
            <div className="fixed">
                <div className="nav">
                    <ul ref={navList}>
                        <li className="category" ref={category} >
                            <div className="title">
                                <div>
                                    <FaBars />
                                </div>
                                <p>دسته بندی کالاها</p>
                            </div>
                            <MegaNav megaNav={megaNav} />
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <i className="fa-regular fa-basket-shopping"></i>
                                </div>
                                <p>سوپر مارکت</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <i className="fa-regular fa-fire-flame-curved"></i>
                                </div>
                                <p>پرفروش ترین ها</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <i className="fa-regular fa-percent"></i>
                                </div>
                                <p>تخفیف ها و پیشنهادها</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <div>
                                    <i className="fa-regular fa-badge-percent"></i>
                                </div>
                                <p>شگفت انگیزها</p>
                            </Link>
                        </li>
                        <li className={isShow ? "" : "d-none"}>
                            <Link to="/">
                                سوالی دارید؟
                            </Link>
                        </li> 
                        <li>
                            <Link to="/">
                                فروشنده شوید!
                            </Link>
                        </li>
                        <li className="hover-bottom" ref={bottomListHover}></li>
                        <li className="hover-top" ref={topListHover}></li>
                    </ul>
                </div>
                <div className="location">
                    <Link to="/">
                        <div className="icon">
                            <GrLocation />
                        </div>
                        لطفا شهر خود را انتخاب کنید
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
