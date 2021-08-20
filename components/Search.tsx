import React, {Fragment} from 'react'
import styled from "styled-components";

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({value, onChange}: Props) => {
    return <SearchContainer>
        <Input type={"text"} value={value} onChange={onChange} placeholder={"Search for anything..."}/>
        <Button>Search</Button>
    </SearchContainer>
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
  border: none
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