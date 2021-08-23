import React, { Fragment, useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { CustomSearchBox } from "./CustomSearchBox";
import { SearchResults } from "./SearchResults";
import { SearchState } from "react-instantsearch-core";

const searchClient = algoliasearch(
  process.env.appId as string,
  process.env.apiKey as string
);

export const Search = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    query: "",
  });

  return (
    <Fragment>
      <InstantSearch
        indexName={process.env.indexName as string}
        searchClient={searchClient}
        searchState={searchState}
        onSearchStateChange={(newSearchState) => {
          setSearchState(newSearchState);
        }}
      >
        <CustomSearchBox />
        {searchState!.query!.length ? <SearchResults /> : <div/>}
      </InstantSearch>
    </Fragment>
  );
};
