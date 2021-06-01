import {
 Form, FormControl, Button
} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
 return (
  <Form inline>
   <FormControl type="text" placeholder="Search by name" className="mr-sm-2" />
   <Button variant="outline-success"><FaSearch /></Button>
  </Form>
 )
}

export default SearchBar
