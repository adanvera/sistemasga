import React from 'react'
import { Table } from "react-bootstrap";
import swal from 'sweetalert';

function RoleList() {
    
  return (
    <div className="row pt-5">
        <div className="col-md-12">
          <Table responsive="md"  id="tablelist">
            <thead>
              <tr>
                <th>#</th>
                <th>ROL</th>
                <th>correo electrónico</th>
                <th>rol</th>
                <th className="a-texttt">acciones</th>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
  )
}

export default RoleList