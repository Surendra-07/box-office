import React from "react";
import { useState } from "react";
import ActorGrid from "../Component/actor/ActorGrid";
import ShowGrid from "../Component/show/ShowGrid";
import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  let isShowSearch = searchOption === "shows";

  const oninput = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        setResults(result);
      });
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onradiochange = (ev) => {
    setSearchOption(ev.target.value);
  };
  console.log(searchOption);
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          onChange={oninput}
          placeholder="Search Here"
          onKeyDown={onKeyDown}
          value={input}
        ></input>
      </div>
      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            checked={isShowSearch}
            type="radio"
            value="shows"
            onChange={onradiochange}
          />
        </label>
        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowSearch}
            onChange={onradiochange}
          />
        </label>
      </div>
      <button type="Button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </div>
  );
};

export default Home;
