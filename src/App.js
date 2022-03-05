import LoginForm from './componentes/LoginForm';
import React, { useContext} from 'react';
import { Dashboard } from './componentes/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './componentes/RegisterForm';

function App() {

  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route  index path='/' element = {<LoginForm />}/>
            <Route   path='dashboard' element = {<Dashboard  className="m-0 p-0"/>}/>
            <Route   path='/registrar' element = {<RegisterForm />}/>
        </Routes>
      </BrowserRouter>  
    </div>
    
  );
}

export default App;
