import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CompCreateUser } from './deportes/Crearusuarios.jsx'
import { CompShowUsers } from './deportes/mostrarusuarios.jsx'
import { CompEditUser } from './deportes/Editarusuario.jsx'
import { CompCreateEvento } from './deportes/CrearEventos.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>

      <BrowserRouter>
                      <Routes>
                         
                               <Route path='/create' element={ <CompCreateUser />} />
                               <Route path='/users' element ={ <CompShowUsers />} />
                               <Route path='/edit/:id' element= {<CompEditUser />} />
                               <Route path='/regevento' element= { <CompCreateEvento />} />
                      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
