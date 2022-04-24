import React from 'react'
import user_one from '../images/users/user_one.png'

function DisplayUserPr({object}) {
  return (
    <div className="pr-2">
        <img id="facebookicon" src={user_one}/>
        <span id="overname">{object.nombre+" "+object.apellido}</span>
    </div>
  )
}

export default DisplayUserPr