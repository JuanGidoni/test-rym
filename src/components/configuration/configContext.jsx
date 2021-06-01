import React, { useContext, useState, useEffect } from 'react'
import Loader from '../atoms/Loader'
const ConfigurationContext = React.createContext()

export function useConfigurationContext() {
  return useContext(ConfigurationContext)
}

export function ConfigurationProvider({ children, ...props }) {

  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [uniqueChar, setUniqueChar] = useState(null)

  const urls = {
    "characters": `https://rickandmortyapi.com/api/character`,
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
  }

  // Create the functionality to process R&M API (next versions)

  const getCharactersFromApi = async (page) => {
    try {
      let callToApi
      if (page) {
        callToApi = await fetch(urls.characters + '/page?' + page)
      } else {
        callToApi = await fetch(urls.characters)
      }
      const resultFromCall = await callToApi.json()
      setCharacters(resultFromCall)
    } catch (error) {
      console.log(error)
    }
  }

  const getUniqueCharacterInfo = async (id) => {
    try {
      const callToApi = await fetch(urls.characters + '/' + id)
      const resultFromCall = await callToApi.json()
      setUniqueChar(resultFromCall)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const ejecuteOnce = () => {
      getCharactersFromApi()
      setLoading(false)
    }
    return ejecuteOnce()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    loading,
    setLoading,
    characters,
    getUniqueCharacterInfo,
    uniqueChar,
    setUniqueChar
  }

  return (
    <ConfigurationContext.Provider value={value} props={props}>
      {loading ? <Loader /> : children}
    </ConfigurationContext.Provider>
  )
}
