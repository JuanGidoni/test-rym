import React, { useContext, useState, useEffect } from 'react'
import Loader from '../atoms/Loader'

const ConfigurationContext = React.createContext()

export function useConfigurationContext() {
  return useContext(ConfigurationContext)
}

export function ConfigurationProvider({ children, ...props }) {

  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  const [searchedChar, setSearchedChar] = useState([])
  const [uniqueChar, setUniqueChar] = useState(null)

  const urls = {
    "characters": `https://rickandmortyapi.com/api/character`,
    "locations": "https://rickandmortyapi.com/api/location",
    "episodes": "https://rickandmortyapi.com/api/episode"
  }

  const changePage = async (page) => {
    try {
      let callToApi
      if(page){
        callToApi = await fetch(page)
      }else{
        callToApi = await fetch(urls.characters)
      }
      const resultFromCall = await callToApi.json()
      setCharacters(resultFromCall)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const callToApi = await fetch(urls.characters)
        const resultFromCall = await callToApi.json()
        setCharacters(resultFromCall)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  const value = {
    urls,
    loading,
    characters,
    searchedChar,
    uniqueChar,
    setUniqueChar,
    setSearchedChar,
    setLoading,
    changePage
  }

  return (
    <ConfigurationContext.Provider value={value} props={props}>
      {loading ? <Loader /> : children}
    </ConfigurationContext.Provider>
  )
}
