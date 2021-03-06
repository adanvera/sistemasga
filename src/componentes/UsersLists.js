import React from "react";
import { Table } from "react-bootstrap";
import { Tbody } from "./Tbody.js";


function UsersLists({ usuario }, { role }) {
  //tabla correspondiente a listado de usuarios
  return (
    <>
      <div className="row pt-5">
        <div className="col-md-12">
          <Table responsive="md" id="tablelist" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>nombre y apellido</th>
                <th>correo electrónico</th>
                <th>rol</th>
                <th className="a-texttt">acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((us, index) => {
                return <Tbody index={index + 1} usuario={us} role={role} />
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UsersLists;
