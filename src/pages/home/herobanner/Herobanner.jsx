import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Herobanner.scss";

import Content from "../../../components/conentWrapper/Content";
import Img from "../../../components/lazyloading/Img";
import useFetch from "../../../hooks/useFetch";


const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const updateBackground = () => {
            const bg =
                url.backdrop +
                data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
            setBackground(bg);
        };

        const intervalId = setInterval(updateBackground, 10000);

        return () => clearInterval(intervalId);
    }, [data]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <Content>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button></button>
                    </div>
                </div>
            </Content>
        </div>
    );
};

export default HeroBanner;