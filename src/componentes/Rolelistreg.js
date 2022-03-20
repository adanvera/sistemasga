import React from 'react'
import { Rolerolereg } from './Rolerolereg'

function Rolelistreg({roles}) {
  return (
    <>
        <option>
                { roles.map((rl,index) => {
                  return <Rolerolereg key={rl._id} role={rl} />
                })}
        </option>
    </>
  )
}

export default Rolelistreg