import './App.css';
function App() {

  const test = async () => {
    fetch('http://35.181.169.48:80/get')
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => test() }>    Click me</button>
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
      </header>
    </div>
  );
}

export default App;
