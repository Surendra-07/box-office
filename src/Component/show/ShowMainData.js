import React from "react";
import img_not_found from "../img_not_found.jpg";
import { Star } from "../styled";
const ShowMainData = ({ name, rating, summary, tags, image }) => {
  return (
    <div>
      <img src={image ? image.original : img_not_found} alt="show-cover" />
      <div>
        <div>
          <h1>{name}</h1>
          <div>
            <Star />
            <span> {rating.average || "N/A"}</span>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      <div>
        Tags:
        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
