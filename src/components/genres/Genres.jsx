import React from "react";
import "./Genres.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((x) => {
        if (!genres[x]?.name) return;
        return (
          <div key={x} className="genre">
            {genres[x]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
