import React, { useContext, useState, useEffect } from 'react'
import Loader from '../atoms/Loader'
const ConfigurationContext = React.createContext()

export function useConfigurationContext() {
 return useContext(ConfigurationContext)
}

export function ConfigurationProvider({children, ...props}) {
 const [loading, setLoading] = useState(true)

 // Create the functionality to process R&M API (next versions)
 
 useEffect(() => {
  const ejecuteOnce = () => {
   setLoading(false)
  }
  return ejecuteOnce()
 }, [])

 const value = {
  loading,
  setLoading
 }

 return (
  <ConfigurationContext.Provider value={value} props={props}>
   {loading ? <Loader /> : children}
  </ConfigurationContext.Provider>
 )
}
