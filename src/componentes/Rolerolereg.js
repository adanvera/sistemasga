import React from 'react'
 

export const Rolerolereg = ({ role:rl }) => {
  
    return(
        <>
            { <option value={rl.rol}>{rl.rol}</option> }
        </>
    )
}