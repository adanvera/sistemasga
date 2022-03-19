import React from 'react'



export const Tbodyrol = ({rl, index})=>{
    return(
        <>
            <td className="pl-dos">{index}</td>
            <td>{rl.rol}</td>
            <td>{rl.acceso}</td>
            <td className="d-flex">
				<div className="padright deleteuser">
					<span className="pten">
						<ion-icon name="trash-bin-outline" ></ion-icon>
					</span>
				</div>
				<div className="padright edituser">
					<span className="pten" >
						<ion-icon name="create-outline"></ion-icon>
					</span>
				</div>
			</td>
        </>
    )
}