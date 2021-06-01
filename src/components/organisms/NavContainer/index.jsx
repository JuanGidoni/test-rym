import {
 Navbar, Nav
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SearchBar from '../../atoms/SearchBar'

const NavContainer = () => {
 return (
  <Navbar bg="rym" expand="lg">
   <Navbar.Brand>R& M Challenge Frontend</Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <Link to="/" className="nav-link">Back to home</Link>
    </Nav>
    <SearchBar />
   </Navbar.Collapse>
  </Navbar>
 )
}

export default NavContainer
