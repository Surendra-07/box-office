import React from "react";
import ShowCard from "./ShowCard";
import img_not_found from "../img_not_found.jpg";
import { FlexGrid } from "../styled";

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : img_not_found}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
