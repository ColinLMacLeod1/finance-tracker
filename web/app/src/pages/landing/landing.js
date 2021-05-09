import './index.css';
import { useState } from 'react';
import logo from './img/logo.svg';

function Landing() {
  const [ state, setState ] = useState(2);



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          State: {state}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn sdakfjsakjdhfReact
        </a>
        <button onClick={() => {setState(5);}}> Click me! </button>
      </header>
    </div>
  );
}

export default Landing;
