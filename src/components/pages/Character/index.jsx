import { useEffect } from 'react'
import { useConfigurationContext } from '../../configuration/configContext'
import { useParams } from "react-router-dom"

const Character = () => {

 const { id } = useParams()
 const { getUniqueCharacterInfo } = useConfigurationContext()

 useEffect(() => {

  const executeGetUniqueChar = () => {
   getUniqueCharacterInfo(id)
  }

  return executeGetUniqueChar()

 }, [getUniqueCharacterInfo, id])
 return (
  <div>
   Character {id}
  </div>
 )
}

export default Character