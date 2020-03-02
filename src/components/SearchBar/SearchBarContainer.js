// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const searchEvent = (event)=> {
    event.preventDefault();
    const searchField = document.getElementById("searchField");
    props.searchFunction(searchField.value);
  };

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x" style={{position: `relative`, top: `50%`,transform: `translate(0%, -55%)`}} />
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" style={{position: `relative`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, width: `100px`, align: `center`, borderLeft: `1px solid`, paddingLeft: `10px`}} />
      </div>
      <form className="search-form" onSubmit={searchEvent}>
        <input
          type="text"
          placeholder="🔍 Search"
          onChange={searchEvent}
          id="searchField"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass fa-lg" />
        </div>
        <div className="social">
          <i className="far fa-heart fa-lg" />
        </div>
        <div className="social">
          <i className="far fa-user-circle fa-lg" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
