import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log("searched", input);
    dispatch({
      type: actionTypes.SET_USER,
      user: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <center>
        <div className="search__input">
          <SearchIcon className="search__inputicon" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Google or type a URL"
          />
          <MicIcon />
        </div>
        {!hideButtons ? (
          <div className="search__button">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Luckey</Button>
          </div>
        ) : (
          <div className="search__button">
            <Button
              className="search__buttonsHidden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search__buttonsHidden" variant="outlined">
              I'm Feeling Luckey
            </Button>
          </div>
        )}
      </center>
    </form>
  );
}

export default Search;
