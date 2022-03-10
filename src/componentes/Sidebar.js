import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myLogo from '../images/iconwhite.png'


function Sidebar() {
    const navigate = useNavigate()
    const logout = ()=>{
		localStorage.clear()
        navigate('/')
    }

    return (
    <>
        <div className="sidebar border-end bg-white" id="sidebar-wrapper">
			<div className=" sidebar-heading border-bottom pb-2"><img src={myLogo} alt="" /></div>
				<div className="list-group list-group-flush">
					<ul className="list-unstyled">
						<li>
                            <Link className="list-group-item list-group-item-action p-3 active" to=""><ion-icon name="grid-outline" ></ion-icon> <span className="p-2">Proyecto</span>  </Link>
						</li>
						<li>
                            <Link className="list-group-item list-group-item-action p-3" to="#"> <ion-icon name="git-compare-outline"></ion-icon> <span className="p-2">Desarrollo</span>  </Link>
						</li>
						<li>
                            <Link className="list-group-item list-group-item-action p-3" to="#" ><ion-icon name="finger-print-outline"></ion-icon> <span className="p-2">Seguridad</span> </Link>
						</li>
					</ul>
				</div>
				<div className="bottom-side-menu">
					<ul className="list-unstyled">
						<li className="nav-item">
						    <a href="" className="nav-link">
							<span className="bt-cerrar" onClick={logout}> <ion-icon name="power" className="pt-1"></ion-icon> Cerrar sesion </span>
						</a>
					</li>
				</ul>
			</div>
		</div>
    </>
  );
}

export default Sidebar;
