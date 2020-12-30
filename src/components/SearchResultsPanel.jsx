import { useEffect } from "react";
import SearchListItem from "./SearchListItem";
import "./SearchResultsPanel.scss";

function SearchResultsPanel({ input, searchResults, nominees, addNominee }) {
  let searchResultsList;

  if (searchResults) {
    searchResultsList = searchResults.map((movie) => {
      if (!nominees.includes(movie.title)) {
        return (
          <SearchListItem
            disabled={false}
            key={movie.Title}
            nominees={nominees}
            movieData={movie}
            addNominee={addNominee}
          />
        );
      } else {
        return (
          <SearchListItem
            disabled={true}
            key={movie.Title}
            nominees={nominees}
            movieData={movie}
            addNominee={addNominee}
          />
        );
      }
    });
  }

  return (
    <div>
      {input ? <h3>Search Results for "{input}" </h3> : <h3>Search Results</h3>}

      <div>
        {searchResults ? <ul>{searchResultsList}</ul> : <p>No Results Found</p>}
      </div>
    </div>
  );
}

export default SearchResultsPanel;
