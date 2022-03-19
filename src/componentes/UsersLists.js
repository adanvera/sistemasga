import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function UsersLists({nombre, apellido, correo ,rol, index}) {

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
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{index}</td>
                <td><span className="sp-name">{nombre} {apellido}</span></td>
                <td>{correo}</td>
                <td>{rol}</td>
                <td className="d-flex">
                    <div className="padright deleteuser">
                      <span className="pten" onClick={()=>deleteUser()}><ion-icon name="trash-bin-outline"></ion-icon></span>
                    </div>
                    <div className="padright edituser">
                      <span className="pten" onClick={()=>deleteUser()}><ion-icon name="create-outline"></ion-icon></span>
                    </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UsersLists;
