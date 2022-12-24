import React from "react";
import { useState } from "react";
import ActorGrid from "../Component/actor/ActorGrid";
import CustomRadio from "../Component/CustomRadio";

import ShowGrid from "../Component/show/ShowGrid";

import { apiGet } from "../misc/config";
import { useLastQuery } from "../misc/custom-hooks";
import {
  RadioInputsWrapper,
  SearchButtonWrapper,
  SearchInput,
} from "./Home.styled";

const Home = () => {
  const [input, setInput] = useLastQuery();
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

  return (
    <div>
      <div>
        <SearchInput
          type="text"
          name="search"
          onChange={oninput}
          placeholder="Search Here"
          onKeyDown={onKeyDown}
          value={input}
        />
      </div>
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="Shows"
            id="shows-search"
            checked={isShowSearch}
            type="radio"
            value="shows"
            onChange={onradiochange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actors-search"
            checked={!isShowSearch}
            type="radio"
            value="people"
            onChange={onradiochange}
          />
        </div>
      </RadioInputsWrapper>

      <SearchButtonWrapper>
        <button type="Button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </div>
  );
};

export default Home;
