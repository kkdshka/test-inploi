import React from 'react';
import styled from "styled-components";

export const NoData = () => {
    return (
        <NoDataWrapper>
            No jobs found
        </NoDataWrapper>
    );
};

const NoDataWrapper = styled.div`
  background-color: white;
  margin: 2em;
  width: 60%;
  border-radius: 20px;
  padding: 1em;
`;

