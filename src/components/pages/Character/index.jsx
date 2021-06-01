import { useEffect } from 'react'
import { useConfigurationContext } from '../../configuration/ConfigContext'
import { useParams } from "react-router-dom"
import CharacterUniqueCardFull from '../../molecules/CharacterUniqueCardFull'


const Character = () => {

 const { id } = useParams()
 const { uniqueChar, getUniqueCharacterInfo } = useConfigurationContext()

 useEffect(() => {
  
   getUniqueCharacterInfo(id)

 }, [getUniqueCharacterInfo, id])
 return (
  !uniqueChar ? 'Loading...' :
   <div className="uniqueCharacter">
    <CharacterUniqueCardFull 
         className="character"
         id={uniqueChar.id}
         name={uniqueChar.name}
         status={uniqueChar.status}
         species={uniqueChar.species}
         type={uniqueChar.type}
         gender={uniqueChar.gender}
         origin={uniqueChar.origin}
         location={uniqueChar.location}
         image={uniqueChar.image}
         episode={uniqueChar.episode}
         url={uniqueChar.url}
         created={uniqueChar.created}
       />
   </div>

 )
}

export default Character