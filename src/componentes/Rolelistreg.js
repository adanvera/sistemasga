import React from 'react'
import { Rolerolereg } from './Rolerolereg'

function Rolelistreg({ roles }) {
	//listado de roles a la hora de registrar 
	return (
		<>
			{roles.map((rol) => {
				return <Rolerolereg key={rol.rol} role={rol} />
			})}
		</>
	)
}

export default Rolelistreg
