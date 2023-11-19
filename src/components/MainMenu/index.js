import React from "react";
import "./index.css";

import search from "../../assets/icons/search.png";
import home from "../../assets/icons/home.png";
import genres from "../../assets/icons/genres.png";
import movies from "../../assets/icons/movies.png";
import tvShows from "../../assets/icons/tvShows.png";
import watchLater from "../../assets/icons/watchLater.png";

const MainMenu = () => {
  return (
    <nav className="nav__cont">
      <div className="user-info">
        <div className="avatar"></div>
        <div>UserName</div>
      </div>
      <ul className="nav">
        <li className="nav__items ">
          <img src={search} alt="Search" />
          <span>Search</span>
        </li>

        <li className="nav__items ">
          <img src={home} alt="Search" />
          <span>Home</span>
        </li>

        <li className="nav__items ">
          <img src={tvShows} alt="Search" />

          <span>TV Shows</span>
        </li>

        <li className="nav__items ">
          <img src={movies} alt="Search" />

          <span>Movies</span>
        </li>
        <li className="nav__items ">
          <img src={genres} alt="Search" />

          <span>Genres</span>
        </li>
        <li className="nav__items ">
          <img src={watchLater} alt="Search" />

          <span>Watch Later</span>
        </li>
      </ul>

      <div className="settings">
        <ul className="setting-list">
          <li>Language</li>
          <li>Get Help</li>
          <li>Exit</li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
