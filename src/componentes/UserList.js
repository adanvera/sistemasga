import React from 'react'

function UserList({ usuario }) {
    console.log(usuario);
    return (
        <>
            {
                usuario.map(usuario => {
                    return (<option value={usuario.uui}>{usuario.nombre} {usuario.apellido}</option>)
                })
            }
        </>
    )
}

export default UserList