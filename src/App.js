
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FormComponent from "./components/FormComponent";
import InstruccionesComponent from "./components/Instrucciones";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  const [frase, setFrase] = useState('en un lugar de la mancha');

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instrucciones">Instrucciones</Link></li>
          </ul>
        </nav>
        <header className="App-header">
          <Switch>

            <Route path="/" exact>
              <img src={logo} className="App-logo" alt="logo" />
              <HeaderComponent frase={frase} />
              <FormComponent frase={frase} />
            </Route>
            <Route path="/instrucciones">
              <InstruccionesComponent />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;