import React from "react";
import { Container, Row } from "react-bootstrap";
import { Card } from "../components/Card";

interface Props {}

export const Main: React.FC<Props> = () => {
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <Row style={{ alignItems: "center", justifyContent: "center" }}>
        <Card route="/beanies">Beanies</Card>
        <Card route="/facemasks">Facemasks</Card>
        <Card route="/gloves">Gloves</Card>
      </Row>
    </Container>
  );
};
