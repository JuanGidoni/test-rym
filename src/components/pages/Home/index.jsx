import { useConfigurationContext } from "../../configuration/configContext"
import CharacterUniqueCard from "../../molecules/characteruniquecard"
import { Link } from 'react-router-dom'

const Home = () => {

 const { characters } = useConfigurationContext()
 return (
  <div className="container-fluid">
   <div className="row">
    {
     characters.results && characters.results.length > 0 ? characters.results.map(
      (v) =>
       <div className="col-4 card" key={v.id}>
        <Link to={`/character/${v.id}`}>
         <CharacterUniqueCard info={v} />
        </Link>
       </div>
     ) : 'No characters found... try next time :('
    }
   </div>
  </div>
 )
}

export default Home
