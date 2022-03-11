import { createContext, useContext, useState } from 'react'

export const DataContext = createContext()
const dbInitializer = {nombre:''}
export const DataProvider = ({ children }) => {
	const [user,setUser]=useState(dbInitializer)
  const [authDashboard,setAuthDashboard] = useState(false)
  const [authRegisterForm,setAuthRegisterForm] = useState(false)
  const [currentScreen,setCurrentScreen]=useState({
    proyectos:true,
    desarrollo:false,
    seguridad:false
  })
  return (
    <DataContext.Provider value = {{
      user,setUser,
      authDashboard,setAuthDashboard,
      authRegisterForm,setAuthRegisterForm,
      currentScreen,setCurrentScreen
    }}>
      {children}
    </DataContext.Provider>
  )
}
