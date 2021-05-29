import {
 Navbar, Nav, Form, FormControl, Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavContainer = () => {
 return (
  <Navbar bg="light" expand="lg">
   <Navbar.Brand>R& M Challenge Frontend</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link to="/" className="nav-link">Back to home</Link>
    </Nav>
    <Form inline>
     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="outline-success">Search</Button>
    </Form>
   </Navbar.Collapse>
  </Navbar>
 )
}

export default NavContainer
