import React, {Fragment, useState} from 'react'
import styled from "styled-components";
import algoliasearch from "algoliasearch/lite";
import {
    Hits,
    InstantSearch,
    SearchBox
} from 'react-instantsearch-dom';

const searchClient = algoliasearch(
    "RY8KA2GJPX",
    "13e751a21f2ae69d7ccb7b590a0a9b3a"
);

export const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchState, setSearchState] = useState({query: ""})

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    const handleSearchClick = (e: React.MouseEvent<HTMLElement>) => {
        setSearchState({query: searchValue});
    }

    return <Fragment>
        <SearchContainer>
            <Input type={"text"} value={searchValue} onChange={handleSearchChange} placeholder={"Search for anything..."}/>
            <Button onClick={handleSearchClick}>Search</Button>
        </SearchContainer>
        <InstantSearch
            indexName="dev_jobs_index"
            searchClient={searchClient}
        >
            <SearchBox />
            <Hits/>
        </InstantSearch>
    </Fragment>
}

const Input = styled.input`
  font-size: 27px;
  padding: 0.5em;
  border: 0;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-weight: bold;
    color: #8e8e8e;
  }
`

const Button = styled.button`
  background-color: #0045FF;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 1em 1.5em;
  border-radius: 20px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const SearchContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin-bottom: 12em;
`