import React from "react";
import { Table } from "react-bootstrap";

function UsersLists({nombre, apellido ,rol}) {

  return (
    <>
      <div className="row pt-5">
        <div className="col-md-12">
          <Table responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>nombre</th>
                <th>rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td><span className="sp-name">{nombre} {apellido}</span></td>
                <td>{rol}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UsersLists;
