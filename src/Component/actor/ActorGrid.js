import React from "react";
import { FlexGrid } from "../styled";
import ActorCard from "./ActorCard";
import img_not_found from "../img_not_found.jpg";

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          country={person.country ? person.country.name : null}
          name={person.name}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : img_not_found}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
