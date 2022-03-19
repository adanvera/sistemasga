import React from 'react'
import { Table } from "react-bootstrap";


function RoleList() {
    
  return (
    <div className="row pt-5">
        <div className="col-md-12">
          <Table responsive="md"  id="tablelist">
            <thead>
              <tr>
                <th>#</th>
                <th>rol</th>
                <th>con acceso a</th>
                <th className="a-texttt">acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>admin</td>
                <td>desarrollo</td>
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
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default RoleList