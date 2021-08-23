import styled from "styled-components";
import React from "react";

export const H1 = styled.h1`
  color: white;
  margin: 2em;
  font-size: 50px;
`;

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return <H1>{children}</H1>;
};