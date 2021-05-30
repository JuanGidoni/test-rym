import {
 Form, FormControl, Button
} from 'react-bootstrap'
const SearchBar = () => {
 return (
  <Form inline>
   <FormControl type="text" placeholder="Search" className="mr-sm-2" />
   <Button variant="outline-success">Search</Button>
  </Form>
 )
}

export default SearchBar
