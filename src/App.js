import './App.css';
import LoginForm from './componentes/LoginForm';
import React, { useState } from 'react';




function App() {
  /**datos de usuario dommie */
  const userAd ={
    email: "ejemplo@ejemplo.com",
    password :"admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);
  }
 
  const Logout = () =>{
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.email !="")?(
        <div className="container-fluid">
          <h1>hola</h1>
          <button>Cerrar sesion</button>
        </div>
      ):(<LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
