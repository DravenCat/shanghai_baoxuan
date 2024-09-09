import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body className={"App-body"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 去  <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
