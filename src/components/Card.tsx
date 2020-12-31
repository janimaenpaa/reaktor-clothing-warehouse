import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 16rem;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

interface Props {
  children?: React.ReactNode;
  route: string;
}

export const Card: React.FC<Props> = ({ children, route }) => {
  return (
    <Container>
      <Link to={route}>{children}</Link>
    </Container>
  );
};
