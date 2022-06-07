import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

const Search = forwardRef(({ focus, setFocus }, ref) => {
    
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className={`search-box ${focus ? "search-box-focus" : "" }`}>
            <input
                type='text'
                ref={ref}
                className={`search ${focus ? "search-focus" : ""}`}
                placeholder='جستجوی محصول مورد نظر...'
                value={search}
                onChange={handleChange}
                onFocus={()=>setFocus(true)}
            />
            <div className={`search-result ${focus ? "search-result-focus" : "" }`}>
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
                    <div className="top-group">
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
    );
});

export default Search;
