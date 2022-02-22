import LoginForm from './componentes/LoginForm';
import React, { useState } from 'react';
import { Dashboard } from './componentes/Dashboard';

function App() {
  const [isAuth,setIsAuth]= useState(false)

  return (
    <div className="App">
      {isAuth?(
        <Dashboard  className="m-0 p-0"/>
      ):(<LoginForm login = {setIsAuth}/>
      )}
    </div>
  );
}

export default App;
