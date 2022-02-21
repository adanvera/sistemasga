import './App.css';
import LoginForm from './componentes/LoginForm';
import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container} from 'react-bootstrap';
import myLogo from './images/iconwhite.png';
import myphoto from './images/perfil.png';



function App() {
  /**datos de usuario dommie para iniciar sesion */
  const userAd ={
    name: "Adan",
    password :"admin123"
  }
  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);
    if (details.name == userAd.name && details.password == userAd.password){
      console.log("Iniciaste sesion")
      setUser({
        name: details.name
      })
    }else{
      console.log("No se encuentra registradoo locoo")
    }
  }
 
  /**para cerrar sesion */
  const Logout = () =>{
    setUser({name:"", password:""});
  }

  return (
    <div className="App">
      {(user.name !="")?(
        <Container fluid={true} className="row m-0 p-0">
          <Container className=' sidebar'>
            <Navbar.Brand href="#home">
                <img src={myLogo} alt="" />
                <button className='bt-cerrar' onClick={Logout} >Cerrar sesion</button>
              </Navbar.Brand>
          </Container>
          <Container className='navbar justify-content-between w-100  col p-0' variant="dark">
                <Nav className="items">
                    <ion-icon name="reorder-three-outline"></ion-icon>
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#features">Proyectos</Nav.Link>
                    <Nav.Link href="#pricing">Item 3</Nav.Link>
                </Nav>
                <Nav className="">
                    <Nav.Link href="#pricing" className='d-flex'>
                      <div className='t-a'>
                        <p className='p-style fw-100'>Bienvenido</p>
                        <span>{user.name}</span>
                      </div>
                      <div className='pl'>
                        <img src={myphoto} alt="" />
                      </div>
                    </Nav.Link>
                </Nav>
          </Container>
      </Container> 
      ):(<LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
