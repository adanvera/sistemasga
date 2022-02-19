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

    if (details.email == userAd.email && details.password == userAd.password){
      console.log("Iniciaste sesion")

      setUser({
        email: details.email
      })

    }else{
      console.log("No anda locoo")
    }
     
    
  }
 
  const Logout = () =>{
    
    setUser({name:"", email:""});
  }

  return (
    <div className="App">
      {(user.email !="")?(
        <div className="container-fluid">
          <h1>Bienvenido, <span>{user.email}</span> </h1>
          <button onClick={Logout}>Cerrar sesion</button>
        </div>
      ):(<LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
