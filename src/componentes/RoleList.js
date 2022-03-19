import React from 'react'
import { Table } from "react-bootstrap";
import { Tbodyrol } from './Tbodyrol';

function RoleList({rol}) {
    
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
                { rol.map((rl,index) => {
                  return <Tbodyrol index={index+1} role={rl} />
                })}
            </tbody>
          </Table>
        </div>
      </div>
  )
}

export default RoleList