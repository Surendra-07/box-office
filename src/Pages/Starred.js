import React, { useEffect, useState } from "react";

import ShowGrid from "../Component/show/ShowGrid";
import { apiGet } from "../misc/config";
import { useShows } from "../misc/custom-hooks";

const Starred = () => {
  const [starred] = useShows();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shows, setShows] = useState();

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map((showId) => {
        return apiGet(`/shows/${showId}`).then((r) => r.json());
      });

      Promise.all(promises)
        .then((apiData) => apiData.map((show) => ({ show })))
        .then((results) => {
          setShows(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [starred]);

  return (
    <div>
      {isLoading && <div>shows are still loading</div>}
      {error && <div>error ocurred={error}</div>}
      {!isLoading && !shows && <div>No shows</div>}
      {!isLoading && !error && shows && <ShowGrid data={shows} />}
    </div>
  );
};

export default Starred;
