import "./Navigation.css" ;
import { FaBars } from "react-icons/fa" ;
import { GrLocation } from "react-icons/gr" ;
import { useEffect , useRef , useState} from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive" ;
import MegaNav from "../Mega-Nav/MeagaNav";
import Nav from "../../Common/Nav/Nav";

const Navigation = () => {

    const isShow = useMediaQuery({minWidth:1110}) ;

    const [scroll , setScroll] = useState(false) ;
    const [megaNav , setMegaNav] = useState(false) ;
    

    const nav = useRef() ;
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
                })
                li.addEventListener("mouseleave" , (e)=>{
                    bottomHover.style.transform = "scalex(0)" ;
                    topHover.style.transform = "scalex(0)" ;
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
            <div className="nav-fixed">
                <div className="nav">
                    <ul ref={navList}>
                        <li 
                            className="category" 
                            ref={category} 
                            onMouseEnter={()=>setMegaNav(true)}
                            onMouseLeave={()=>setMegaNav(false)}
                        >
                            <div className="title">
                                <div>
                                    <FaBars />
                                </div>
                                <p>دسته بندی کالاها</p>
                            </div>
                            <MegaNav megaNav={megaNav} />
                        </li>
                        <Nav isShow={isShow} />
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
