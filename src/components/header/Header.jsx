import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import Content from "../conentWrapper/Content";
const Header = () => {
  const [show, setshow] = useState("top");
  const [lastscrollY, setlastscrollY] = useState(0);
  const [mobilemenu, setmobilemenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setshowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  const opensearch = () => {
    setmobilemenu(false);
    setshowSearch(true);
  };
  const openmobilemenu = () => {
    setmobilemenu(true);
    setshowSearch(false);
  };
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setshowSearch(true);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setmobilemenu(false);
  };
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastscrollY && !mobilemenu) {
        setshow("hide");
      } else {
        setshow("show");
      }
    }else{
      setshow("top");
    }
    setlastscrollY(window.scrollY);
  
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastscrollY]);
  return (
    <header className={`header ${mobilemenu ? "mobileView" : ""} ${show}`}>
      <Content >
       <div className="logo">
          <Link to={"/"}><h1 style={{color:"white"}}>MOVİE</h1></Link>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={opensearch} />
          </li>
        </ul>
        <div className="mobileMenu">
          <HiOutlineSearch onClick={opensearch} />
          {!mobilemenu ? (
               <SlMenu onClick={openmobilemenu} />
          ) : (
            <VscChromeClose onClick={() => setmobilemenu(false)} />
          )}
        </div>
      </Content>
      {showSearch && (
        <div className="searchBar">
          <Content>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setshowSearch(false)} />
            </div>
          </Content>
        </div>
      )}
    </header>
  );
};

export default Header;
