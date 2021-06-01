import { useState } from 'react'
import {
 FormControl, Button
} from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
const SearchBar = () => {

 const history = useHistory()

 const [searchValue, setSearchValue] = useState('')
 const [inputValue, setInputValue] = useState('Search by name')

 const searchCharacters = async (e) => {
  try {
      if(e.toString() && e.length > 3){
      setSearchValue('')
      setInputValue('Search by name')
      history.push(`/search/${e}`)
      }else {
      setInputValue('Please insert a value to search')
      }
  } catch (error) {
      console.log(error)
  }
}
const handleSearch = (e, value) => {
  if (e.key === "Enter") {
    searchCharacters(value)
  }
}

 return (
  <div className="form-inline">
   <FormControl onKeyDown={(e) => handleSearch(e, searchValue) } type="text" onChange={(e) => setSearchValue(e.target.value) } placeholder={inputValue} className="mr-sm-2" value={searchValue} />
   <Button onClick={(e) => searchCharacters(searchValue)} variant="outline-success"><FaSearch /></Button>
  </div>
 )
}

export default SearchBar
