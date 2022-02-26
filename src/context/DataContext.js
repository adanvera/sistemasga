import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()
const dbInitializer = {nombre:''}
export const DataProvider = ({ children }) => {
	const [user,setUser]=useState(dbInitializer)
  return (
    <DataContext.Provider value = {{user,setUser}}>
      {children}
    </DataContext.Provider>
  )
}
