import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="desc">
        <h1>Full name: Huỳnh Thị Thanh Phương </h1>
        <h1>Class: SE17D08 </h1>
        <h1>School: FPT University </h1>
        <h1>Description: Scorpio </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
