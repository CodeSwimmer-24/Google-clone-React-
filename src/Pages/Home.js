import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <center>
        <div className="home__body">
          <img
            className="google__image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          />
          <div className="home__inputContainer">
            <Search />
            <h1>Search anything </h1>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Home;
