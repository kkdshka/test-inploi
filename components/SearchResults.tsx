import React, { FC } from "react";
import { connectHits, HitsProvided } from "react-instantsearch-core";
import { ICompanyDoc, SearchResultItem } from "./SearchResultsItem";
import styled from "styled-components";

const SearchResultComponent: FC<HitsProvided<ICompanyDoc>> = (searchData) => {
  return (
    <SearchResultWrapper>
      <ul>
        {searchData.hits.map((hit) => (
          <SearchResultItem key={hit.objectID} data={hit} />
        ))}
      </ul>
    </SearchResultWrapper>
  );
};

export const SearchResults = connectHits(SearchResultComponent);

const SearchResultWrapper = styled.div`
  margin: 2em;
  width: 80%;
  border-radius: 20px;
  height: 40vh;
  overflow: auto;
`;