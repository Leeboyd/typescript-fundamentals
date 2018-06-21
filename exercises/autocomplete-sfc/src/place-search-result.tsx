import * as React from 'react';
import { PlaceDetails } from './utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = (pd) => {
  return (
    <li className="search-result">
      <img className="icon"
        src="https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png"/>
      <h3> { pd.name } </h3>
      <p>
        <a href={ pd.url } target="_blank">
          { pd.name }
        </a>
          -  
        <a href={ pd.website } target="_blank">
          { pd.website } 
        </a>
      </p>
    </li>
  );
};