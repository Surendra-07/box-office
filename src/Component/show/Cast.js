import React from "react";
import img_not_found from "../img_not_found.jpg";
const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key}>
          <div>
            <img
              src={person.image ? person.image.medium : img_not_found}
              alt="cast-person"
            />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? "| voice" : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
