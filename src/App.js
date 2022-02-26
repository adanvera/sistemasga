import LoginForm from './componentes/LoginForm';
import React, { useContext} from 'react';
import { Dashboard } from './componentes/Dashboard';
import { DataContext } from './context/DataContext';

function App() {
  const {authDashboard} = useContext(DataContext)

  return (
    
      <div className="App">
        {authDashboard?(
          <Dashboard  className="m-0 p-0"/>
        ):(<LoginForm />
        )}
      </div>
    
  );
}

export default App;
