import { useState , useRef , useEffect } from "react";
import { Link } from "react-router-dom";

const Search = ({styles=""}) => {

    const [search, setSearch] = useState("");
    const [focus, setFocus] = useState(false);

    const searchRef = useRef();

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (!focus) {
            searchRef.current.blur();
            document.body.style.overflow = "" ;
        }else{
            document.body.style.overflow = "hidden" ;
        }
    }, [focus]);

    return (
        <>
            <div
                className={`overly ${focus ? "overly-visible" : ""}`}
                onClick={() => setFocus(false)}
            >
            </div>
            <div className={`hidden mobile:flex search-box ${styles.searchBox} ${focus ? "search-box-focus" : "" }`}>
                <input
                    type='text'
                    ref={searchRef}
                    className={`search ${focus ? "search-focus" : ""}`}
                    placeholder='جستجوی محصول مورد نظر...'
                    value={search}
                    onChange={handleChange}
                    onFocus={()=>setFocus(true)}
                />
                <div className={`search-result ${focus ? styles.searchResultFocus : "" } ${styles.searchResult} `}>
                    <div className='result-text'>
                        { search ?(
                            <>
                                <div>
                                    <div>
                                        <i className="fa-regular fa-timer"></i>
                                    </div>
                                    جستجوی شما :
                                </div>
                                <span>
                                    <p className="text">{search}</p>
                                    <div className="remove" onClick={()=>setSearch("")}>
                                        <i className="fa-regular fa-xmark"></i>
                                    </div>
                                </span>
                            </>
                        ): ""}
                    </div>
                    <div className="top-search">
                        <div>
                            <div>
                                <i className="fa-regular fa-fire-flame-curved"></i>
                            </div>
                            جست جوهای پرطرفدار : 
                        </div>
                        <div className="top-group flex-wrap">
                            <span>
                                <Link to="/">گوشی همراه</Link>
                            </span>
                            <span>
                                <Link to="/">تبلت</Link>
                            </span>
                            <span>
                                <Link to="/">کفش</Link>
                            </span>
                            <span>
                                <Link to="/">کوله پشتی</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
