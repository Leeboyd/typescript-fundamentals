import * as React from 'react';
import { IAppState, App } from './app';
import { PlaceSearchResult } from './place-search-result';

interface IResultListProps extends IAppState {
  handleSearch?: (term: string) => void
}

const NO_OP = () => {};

export const PlaceSearchResultList: React.SFC<IResultListProps> = (prop) => {
  let handler = prop.handleSearch  || (NO_OP);
  let resultSet: JSX.Element[] = []
  
  if (prop.term === '') {
    resultSet.push((
      <li className="blue">
        please enter a search term above...
      </li>
    ))
  } else if (prop.inProgress) {
    resultSet.push((
      <li className="red">
        Searching {prop.term}...
      </li>
    ))
  } else if (prop.results.length > 0) {
    resultSet = prop.results.map((place) => (
      <PlaceSearchResult {...place} key={place.id} />
    ))
  }

  return (
    <div>
      <h2>Search for a place</h2>
      <input
        onChange={e => handler(e.target.value) }
        placeholder="Search"
        type="search"
      />
      <ul className="results">
        { resultSet }
      </ul>
    </div>
  )
}
