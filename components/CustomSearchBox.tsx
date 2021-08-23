import React, { FC, useState } from 'react';
import { connectSearchBox, SearchBoxProvided } from 'react-instantsearch-core';
import styled from 'styled-components';

const SearchBox: FC<SearchBoxProvided> = ({ refine }) => {
    const [ searchQuery, setSearchQuery ] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.currentTarget.value);
    }

    const handleSearchSubmit = () => {
        refine(searchQuery);
    }

    return (
        <SearchContainer>
            <Input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder={"Search for anything..."}
            />
            <Button onClick={handleSearchSubmit}>Search</Button>
        </SearchContainer>
    )
};

// 2. Connect the component using the connector
export const CustomSearchBox = connectSearchBox(SearchBox);

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
`;

const Button = styled.button`
  background-color: #0045ff;
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding: 1em 1.5em;
  border-radius: 20px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`