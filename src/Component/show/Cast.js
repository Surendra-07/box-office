import React from "react";
import img_not_found from "../img_not_found.jpg";
import { CastList } from "./Cast.styled";
const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : img_not_found}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span className="bold">{person.name}</span> | {character.name}{" "}
            {voice ? "| voice" : ""}
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
