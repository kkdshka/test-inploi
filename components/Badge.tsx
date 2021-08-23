import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  icon: IconDefinition;
  text: string;
};

export const Badge = ({ icon, text }: Props) => {
  return (
    <BadgeWrapper>
      <FontAwesomeIcon icon={icon} />
      <TextWrapper>{text}</TextWrapper>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div`
  border: solid 2px #0066ff;
  border-radius: 15px;
  color: #0066ff;
  padding: 0.5em;
  margin-right: 0.5em;
`;

const TextWrapper = styled.span`
  margin-left: 0.5em;
`;

