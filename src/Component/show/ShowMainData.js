import React from "react";
import img_not_found from "../img_not_found.jpg";
import { Star } from "../styled";
import { Headline, MainDataWrapper, TagList } from "./ShowMainData.styled";
const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <MainDataWrapper>
      <img src={image ? image.original : img_not_found} alt="show-cover" />
      <div className="text-side">
        <Headline>
          <h1>{name}</h1>
          <div>
            <Star active="true" />
            <span> {rating.average || "N/A"}</span>
          </div>
        </Headline>
      </div>
      <div
        className="summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></div>
      <div>
        Tags:
        <TagList>
          {tags.map((tag, i) => (
            <span key={i}>{tag} </span>
          ))}
        </TagList>
      </div>
    </MainDataWrapper>
  );
};

export default ShowMainData;
