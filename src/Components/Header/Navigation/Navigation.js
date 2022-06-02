import "./Navigation.css" ;
import { FaBars } from "react-icons/fa" ;
import { useEffect , useRef } from "react";

const Navigation = () => {

    const nav = useRef()
    const navList = useRef() ;
    const bottomListHover = useRef()
    const topListHover = useRef()
    const title = useRef()

    useEffect(()=>{
        const navItem = navList.current.childNodes ;
        const bottomHover = bottomListHover.current ;
        const topHover = topListHover.current ;
        navItem.forEach( li =>{
                li.addEventListener("mouseenter" , (e)=>{
                    e.stopPropagation() ;
                    console.log(e.target) ;
                    let itemWidth = e.target.clientWidth ;
                    let itemLeft = e.target.offsetLeft ;
                    bottomHover.style.width = itemWidth+"px" ;
                    bottomHover.style.transform = "scalex(1)" ;
                    bottomHover.style.left = itemLeft+"px" ;
                    topHover.style.width = itemWidth+"px" ;
                    topHover.style.transform = "scalex(1)" ;
                    topHover.style.left = itemLeft+"px" ;
                })
                li.addEventListener("mouseout" , (e)=>{
                    bottomHover.style.transform = "scalex(0)" ;
                    topHover.style.transform = "scalex(0)" ;
                })
        })

    },[])

    return (
        <nav className="navigation" ref={nav}>
            <div className="nav">
                <ul ref={navList}>
                    <li className="category">
                        <div className="title" ref={title}>
                            <div>
                                <FaBars />
                            </div>
                            <p>دسته بندی کالاها</p>
                        </div>
                        <div className="sub-nav"></div>
                    </li>
                    <li className="hover-bottom" ref={bottomListHover}></li>
                    <li className="hover-top" ref={topListHover}></li>
                </ul>
            </div>
            <div className="location"></div>
        </nav>
    );
}

export default Navigation;
