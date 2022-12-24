import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cast from "../Component/show/Cast";
import Details from "../Component/show/Details";
import Seasons from "../Component/show/Seasons";
import ShowMainData from "../Component/show/ShowMainData";
import { apiGet } from "../misc/config";
import { InfoBlock, ShowPageWrapper } from "./Show.styled";
const Show = () => {
  const intialState = {
    show: null,
    isLoading: true,
    error: null,
  };

  const reducer = (prevState, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS": {
        return { isLoading: false, error: null, show: action.show };
      }
      case "FETCH_FAILURE": {
        return { ...prevState, isLoading: false, error: action.error };
      }
      default:
        return prevState;
    }
  };

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    intialState
  );

  const { id } = useParams();
  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((r) => r.json())
      .then((results) => {
        setTimeout(() => {
          dispatch({ type: "FETCH_SUCCESS", show: results });
        }, 2000);
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILURE", err: err.message });
      });
  }, [id]);
  console.log("show", show);
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
