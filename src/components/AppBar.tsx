import { Nav, Navbar } from "react-bootstrap";

interface Props {}

export const AppBar: React.FC<Props> = (props: Props) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">clothing-warehouse</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
