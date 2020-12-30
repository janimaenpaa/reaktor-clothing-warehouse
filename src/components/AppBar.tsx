import { Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

interface Props {}

export const AppBar: React.FC<Props> = (props: Props) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">clothing-warehouse</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
