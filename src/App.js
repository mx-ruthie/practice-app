import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>
    <Counter />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (this is the placeholder text that happens in the react before you change it to your awesome stuff)
        </a>
      </header>
      
    </div>
    
    </>
    
  );
}

export default App;
