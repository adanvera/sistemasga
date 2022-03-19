import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Tbody } from "./Tbody.js";


function UsersLists({usuario}) {

  const deleteUser=()=>{
    swal({
      title: "Epaa, esa función está en desarrollo",
      text: "En la proxima ya estará funcionando crack ;) !",
      icon: "warning",
      button: "ok",
    });
  }

  return (
    <>
      <div className="row pt-5">
        <div className="col-md-12">
          <Table responsive="md">
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
                { usuario.map((us,index) => {
                  return <Tbody index={index+1} usuario={us} />
                })}

            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UsersLists;
