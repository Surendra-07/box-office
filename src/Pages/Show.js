import React from "react";
import { useParams } from "react-router-dom";
import Cast from "../Component/show/Cast";
import Details from "../Component/show/Details";
import Seasons from "../Component/show/Seasons";
import ShowMainData from "../Component/show/ShowMainData";

import { useShow } from "../misc/custom-hooks";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";
const Show = () => {
  const { id } = useParams();
  const { show, isLoading, error } = useShow(id);

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  if (isLoading) {
    return <div>Data is being Loading</div>;
  }
  if (error) {
    return <div>Error occured : {error.message}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
