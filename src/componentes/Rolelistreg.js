import React from 'react'
import { Rolerolereg } from './Rolerolereg'

function Rolelistreg({ roles }) {
	return (
		<>
			{roles.map((rol) => {
				return <Rolerolereg key={rol.rol} role={rol} />
			})}
		</>
	)
}

export default Rolelistreg
