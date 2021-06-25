
import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FormComponent from "./components/FormComponent";
import { useState } from 'react';

function App() {
  const [frase, setFrase] = useState('en un lugar de la mancha');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HeaderComponent frase={frase} />
        <FormComponent frase={frase} />
      </header>
    </div>
  );
}

export default App;