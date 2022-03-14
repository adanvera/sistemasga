import React from 'react'
import { Dashboard } from './componentes/Dashboard'
import AdminRoute from './componentes/AdminRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainRoute from './componentes/MainRoute'
import Login from './componentes/Login'
import Proyects from './componentes/Proyects'
import Seguridad from './componentes/Seguridad'
import Desarrollo from './componentes/Desarrollo'
import DetailsProject from './componentes/DetailsProject'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainRoute />}>
						<Route index element={<Login />} />
					</Route>
					<Route path="/dashboard" element={<AdminRoute />}>
						<Route  index element={<Dashboard />} />
						<Route path="seguridad" element={<Seguridad />} />
						<Route path="desarrollo" element={<Desarrollo />} />
						
						
						<Route path="DetailsProject" element={<DetailsProject/>}/>

						
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
